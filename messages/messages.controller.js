/** FileName @payment.controller
 * author @CriticalRiver
 * <summary>
 *  DAO for performing Database related operation in Mongo DB for master schema
 *  <npm>
 *      @log4js {Used for logging debug,information and errors in master module}
 *  </npm>
 * </summary>
 */
 const config = require('../config.js');

 const log4js = require('log4js');
 const mongoose = require('mongoose');
 const payments = require('./model/payment.model');
 const logger = log4js.getLogger("masterController");
 const axios = require('axios').default;
 const authService = require('../services/auth.service');
 const moment = require('moment');

 const contracts = require("../contractRenewal/model/userContracts.model");
 const users = require("../users/model/users.model");


 exports.paymentSuccess = (req) => {
     try {
         return new Promise(function(resolve, reject) {

			 const payRes = JSON.parse(req.payload);
			
			//console.log('Payment Response : ', payRes);//.checkoutStatus);			
			//resolve(payRes.checkoutStatus);

             const payment = {};

			if(payRes.checkoutStatus == 'CAPTURED')
			{
				payment.status = 'Success';
			}

             payment.transactionId = payRes._id;
             payment.paymentResponse = payRes;

             //const paymentsReq = new payments(payment);

             payments.findOneAndUpdate({orderNumber: payRes.orderNumber}, payment, {new: true}).then(function(response) {

				 //console.log("Success Response : ", response);

                 if (!response) {
                     resolve([]);
                 } else {
                     resolve([response]);
                 }
             });

         });
     } catch (err) {
         logger.error('Error', err);
         reject(err);
     }
 };


  exports.payment = (req) => {
     try {
         return new Promise(function(resolve, reject) {

		//console.log('req.userId : ', req.userId)
		//console.log('params.id : ', req.params.id)

		const userDetails =  users.findById(req.userId);
		const contractDetails =  contracts.findById(req.params.id);


             Promise.all([userDetails, contractDetails]).then((values) => {
				 //console.log('values : ', values);
				
                const userData = values[0];
                const contractData = values[1];   
				 
				//console.log('response : ', response);
				//resolve(response);


				ordNumber = 'pass-' + moment().valueOf();
				console.log('ordNumber : ' + ordNumber);

				 const paymentRequest = {
									 "username":"DED",
									 "password":"123456789",
									 "orderNumber": ordNumber,
									 "customerAddressLine1":"3435646464",
									 "customerAddressLine2":"MagnatiPay",
									  "language" : "EN",
									  "channel" : "ECOMMERCE",
									  "governmentServices": true,
									  "addTransactionFeesOnTop": true,
									  "merchantSiteUrl" : config.paymentUrl,
									  "merchantBankTransferReturnUrl" : config.paymentUrl,
									  "paymentMethodList" :  ["EDIRHAM_CARD", "NON_EDIRHAM_CARD"],
									  "sessionTimeoutSecs" : "600",
									  "customerName":userData.name,
									  "urn":"1234",
									  "paymentMethod":"EDIRHAM_CARD",
									  "orderStatus":"Pending",
									  "customerEmail":userData.email,
									  "customerPhone":userData.reraContactNumber,
									  "customerCity":"",
									  "customerState":"",
									  "customerCountry": "UAE", 
									  "customerPostalCode":"0000",
									  "purchaseDetails" : {
										"service": [
										  {
											"serviceCode": "10000",
											"quantity" : 1,
											"transactionAmount":contractData.rent,
											"numberOfUnits": 1
										  }
										]
									  }
									};


				//console.log('paymentRequest : ' + paymentRequest);

				//resolve(paymentRequest);
		
				/*
				const paymentStore = {
					"propertyId": contractData.propertyId,
					"paymentType": "Online",
					"amount": contractData.rent,
					"transactionId":'',
					"status": 'Pending',
					"date": moment().format(),
					"paymentResponse":{},
					"contractId": contractData._id,
					"userId":userData._id
				}

				//resolve(paymentStore);
				const paymentSave = new payments(paymentStore);

				 paymentSave.save().then(function(details) {
						resolve(details);
				 }).catch(function(err) {
					 reject(err);
				 });

				*/



				axios.post('https://gatewaydev.payrow.ae/gateway/payrow/purchaseorders', paymentRequest)
				  .then(function (response) {

					console.log(response.data);

					if(response.data.responseCode == 0)
					{

						const paymentStore = {
							"propertyId": contractData.propertyId,
							"paymentType": "Online",
							"amount": contractData.rent,
							"orderNumber":ordNumber,
							"checkoutId": response.data.checkoutId,
							"checkoutUrl": response.data.checkoutUrl,
							"transactionId": '',
							"status": 'Pending',
							"date": moment().format(),
							"paymentResponse":{},
							"contractId": contractData._id,
							"userId":userData._id
						}

						//console.log('paymentStore : ', paymentStore);

						//resolve(paymentStore);
						const paymentSave = new payments(paymentStore);

						 paymentSave.save().then(function(pay) {

								//console.log('pay : ', pay);

								const paymentResponse = {
									"paymentId": pay._id,
									"orderNumber": pay.orderNumber,
									"checkoutId": pay.checkoutId,
									"checkoutUrl": pay.checkoutUrl
								};

								resolve(paymentResponse);

						 }).catch(function(err) {
							 reject(err);
						 });					

					}
					else
					{
						 logger.error('Error', "Payment URL Genertation Failed");
						
						 const err = {
							"error":"Payment URL Genertation Failed"
						 };
						 reject(err);					
					}

				  })
				  .catch(function (err) {

						 logger.error('Error', err);
						 reject(err);
				  });
				

             });


         });
     } catch (err) {
         logger.error('Error', err);
         reject(err);
     }
 };


 exports.paymentStatus = (req) => {
     try {
         return new Promise(function(resolve, reject) {

			console.log('Payment Id : ', req.params.id);//.checkoutStatus);			

             payments.find({_id: new mongoose.Types.ObjectId(req.params.id)}).then(function(response) {
                 if (!response) {
                     resolve({});
                 } else {
                     resolve(response);
                 }
             });

         });
     } catch (err) {
         logger.error('Error', err);
         reject(err);
     }
 };

 exports.paymentCheckStatusBeforeSave = (req) => {
     try {
         return new Promise(function(resolve, reject) {

			console.log('Order Number : ', req.params.orderNumber);	
			console.log('Checkout Id : ', req.params.checkoutId);		

             payments.find({orderNumber:req.params.orderNumber, checkoutId:req.params.checkoutId}).then(function(response) {
                 if (!response) {
                     resolve({});
                 } else {
                     resolve(response);
                 }
             });

         });
     } catch (err) {
         logger.error('Error', err);
         reject(err);
     }
 };
 
 