/** FileName @master.controller
 * author @CriticalRiver
 * <summary>
 *  DAO for performing Database related operation in Mongo DB for master schema
 *  <npm>
 *      @log4js {Used for logging debug,information and errors in master module}
 *  </npm>
 * </summary>
 */
 const log4js = require('log4js');
 const interestTypes = require('./model/interestTypes.model');
 const subscriptions = require('./model/subscriptions.model');
 const maintenanceRequestTypes = require('./model/maintenanceRequestTypes.model');
 const maintenanceRequestServices = require('./model/maintenanceRequestServices.model');
 const advertisements = require('./model/advertisements.model');
 const faqs = require('./model/faqs.model');
 const faqTypes = require('./model/faqTypes.model');
 const offers = require('./model/offers.model');
 const content = require('./model/content.model');
 const logger = log4js.getLogger("masterController");
 
 exports.getInterestList = (req) => {
     try {
         //console.log("Entered Controller");
         return new Promise(function(resolve, reject) {
             interestTypes.find(req)
                 .sort({
                     _id: 1
                 })
                 .then(function(response) {
                     if (!response) {
                         reject('Interests Not found');
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
 
 exports.getTermsConditions = (req) => {
     try {
         //console.log("Entered Controller");
         return new Promise(function(resolve, reject) {
             content.find({
                     _id: 1
                 })
                 .then(function(response) {
                     if (!response) {
                         reject('Data Not found');
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
 
 exports.getSubscriptionList = (req) => {
     try {
         //console.log("Entered Controller");
         return new Promise(function(resolve, reject) {
             subscriptions.find(req)
                 .sort({
                     _id: 1
                 })
                 .then(function(response) {
                     if (!response) {
                         reject('Interests Not found');
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
 
 exports.getMaintenanceRequestList = (req) => {
     try {
         return new Promise(function(resolve, reject) {
             maintenanceRequestTypes.find(req)
                 .sort({
                     _id: 1
                 })
                 .then(function(response) {
                     if (!response) {
                         reject('Interests Not found');
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
 exports.getmaintenanceRequestServicesList = (req) => {
    try {            
        console.log(req.params.id)
        return new Promise(function(resolve, reject) {
            maintenanceRequestServices.find(
                {"maintenanceRequestTypeId" : req.params.id}
                ).then(function(response) {
                    if (!response) {
                        reject('Interests Not found');
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
 
 exports.getadvertisementsList = (req) => {
     try {
         //console.log("Entered Controller");
         return new Promise(function(resolve, reject) {
             advertisements.find(req)
                 .sort({
                     _id: 1
                 })
                 .then(function(response) {
                     if (!response) {
                         reject('Advertisements Not found');
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


 exports.getoffersList = (req) => {
     try {
         //console.log("Entered Controller");
         return new Promise(function(resolve, reject) {
             offers.find(req)
                 .sort({
                     _id: 1
                 })
                 .then(function(response) {
                     if (!response) {
                         reject('Offers Not found');
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

 exports.getFaqs = (req) => {
    try {
       return new Promise(function (resolve, reject) {
        faqs.find().sort({_id: 1}).then(function (response) {
                    if(!response){
                        reject("FAQ's Not found");
                    }else{
                        resolve(response);
                        }                
                       
                    });
                });   
    } catch (err) {
        logger.error('Error', err);
        reject(err);
    }
    
};

 exports.getFaqTypes = (req) => {
    try {
       return new Promise(function (resolve, reject) {
        faqTypes.find().sort({_id: 1}).then(function (response) {
                    if(!response){
                        reject("FAQ Types Not found");
                    }else{
                        resolve(response);
                        }                
                       
                    });
                });   
    } catch (err) {
        logger.error('Error', err);
        reject(err);
    }
    
};
 