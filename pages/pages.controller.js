/** FileName @property.controller
 * author @CriticalRiver
 * <summary>
 *  DAO for performing Database related operation in Mongo DB for property schema
 *  <npm>
 *      @log4js {Used for logging debug,information and errors in property module}
 *  </npm>
 * </summary>
 */
 const log4js = require('log4js');
 //const logger = log4js.getLogger("PropertyController");
 const maintenanceRequestTypes = require('../master/model/maintenanceRequestTypes.model');
 const property = require('./model/property.model');
 const userContracts = require('../contractRenewal/model/userContracts.model');
 const payments = require('../dashboard/model/payments.model');
 const propertyDocuments = require('./model/propertyDocuments.model');
 const userMaintenanceRequests = require('../maintenanceRequests/model/userMaintenanceRequests.model');
 
 /**
  * @name { PropertyList}
  * @description {This Handler Method is used to get list of properties}
  * @param {any} userId 
  * @return {Returns list of properties}
  */
 exports.getPropertList = (userId) => {
	 try {
		 return new Promise(function(resolve, reject) {
			 userProperty.aggregate(
					 [{
							 "$project": {
								 "propertyObjId": {
									 "$toObjectId": "$propertyId"
								 },
								 userId: "$userId",
								 propertyId: "$propertyId",
								 status: "$status",
								 occupancyType: "$occupancyType",
								 userType: "$userType"
							 }
						 },
						 {
							 "$lookup": {
								 "from": "property",
								 "localField": "propertyObjId",
								 "foreignField": "_id",
								 "as": "property"
							 }
						 },
 
						 {
							 "$lookup": {
								 from: "userProperties",
								 let: {
									 propertyId: "$propertyId",
									 userType: 'Tenant'
								 },
								 pipeline: [{
									 $match: {
										 $expr: {
											 $and: [{
													 $eq: ["$propertyId", "$$propertyId"]
												 },
												 {
													 $eq: ["$userType", "$$userType"]
												 },
											 ]
										 }
									 }
								 }],
								 as: "tenant"
							 }
						 },
						 {
							 $unwind: {
								 path: '$tenant',
								 preserveNullAndEmptyArrays: true
							 }
						 },
						 {
							 "$lookup": {
								 from: "userContracts",
								 let: {
									 userId: "$tenant.userId",
									 status: 'Success'
								 },
								 pipeline: [{
									 $match: {
										 $expr: {
											 $and: [{
													 $eq: ["$userId", "$$userId"]
												 },
												 {
													 $eq: ["$status", "$$status"]
												 },
											 ]
										 }
									 }
								 }],
								 as: "tenantContract"
							 }
						 }
					 ]
				 )
				 .sort({
					 createdAt: 1
				 })
				 .match({
					 userId: userId
				 })
				 .then(function(property) {
					 resolve(property);
				 })
				 .catch(function(err) {
					 logger.error("Property controller : ", err);
					 reject(err);
				 });
 
		 });
	 } catch (e) {
		 logger.warn("Property controller : ", e.message);
		 reject(e.message);
	 }
 }
 
 
 /**
  * @name { PropertyList}
  * @description {This Handler Method is used to get list of properties}
  * @param {any} userId 
  * @return {Returns list of properties}
  */
 exports.corporatePropertiesList = (userId) => {
	 try {
		 return new Promise(function(resolve, reject) {
			 userProperty.aggregate(
					 [{
							 "$project": {
								 "propertyObjId": {
									 "$toObjectId": "$propertyId"
								 },
								 userId: "$userId",
								 propertyId: "$propertyId",
								 status: "$status",
								 occupancyType: "$occupancyType",
								 userType: "$userType"
							 }
						 },
						 {
							 "$lookup": {
								 "from": "property",
								 "localField": "propertyObjId",
								 "foreignField": "_id",
								 "as": "property"
							 }
						 }
					 ]
				 )
				 .sort({
					 createdAt: 1
				 })
				 .match({
					 userId: userId
				 })
				 .then(function(property) {
					 resolve(property);
				 })
				 .catch(function(err) {
					 logger.error("Property controller : ", err);
					 reject(err);
				 });
 
		 });
	 } catch (e) {
		 logger.warn("Property controller : ", e.message);
		 reject(e.message);
	 }
 }
 
 
 /**
  * @name { propertyDetails}
  * @description {This Handler Method is used to get the property Details of selected property}
  * @param {any} propertyId 
  * @param {any} userId
  * @return {Returns property details}
  */
 exports.getPropertyDetails = (propertyId, userId) => {
 
	 try {
		 const propertyDetails = property.findById(propertyId);
		 const occupants = userProperty.aggregate([{
				 $match: {
					 $and: [{
							 propertyId: propertyId
						 },
						 {
							 userType: "Occupant"
						 },
					 ]
 
				 }
			 },
			 {
				 "$project": {
					 "userObjId": {
						 "$toObjectId": "$userId"
					 }
				 }
			 },
			 {
				 "$lookup": {
					 "from": "users",
					 "localField": "userObjId",
					 "foreignField": "_id",
					 "as": "occupantDetails"
				 }
			 }
		 ]);
		 const maintenanceRequestTypeList = maintenanceRequestTypes.find().sort({
			 _id: 1
		 });
		 const contract = userContracts.findOne({
			 userId: userId
		 });
		 const paymentData = payments.find({
			 userId: userId
		 });
		 const documents = propertyDocuments.find({
			 propertyId: propertyId
		 });
		 const maintenanceRequestsList = userMaintenanceRequests.find({
			 userId: userId
		 })
		 return new Promise(function(resolve, reject) {
			 Promise.all([propertyDetails, occupants, maintenanceRequestTypeList, contract, paymentData, documents, maintenanceRequestsList]).then((values) => {
				 var response = {
					 "propertyDetails": values[0],
					 "occupants": values[1],
					 "maintenanceRequestTypes": values[2],
					 "contract": values[3],
					 "payments": values[4],
					 "documents": values[5],
					 "maintenanceRequests": values[6],
					 "maintenanceRequests": values[6].length
				 };
				 resolve(response);
			 });
		 });
	 } catch (err) {
		 logger.error('Dashboard Controller', err);
		 reject(err);
	 }
 }
 
 /**
  * @name { getPropertyDocumentsDetails}
  * @description {This Handler Method is used to get the property Details of selected property}
  * @param {any} propertyId 
  * @param {any} userId
  * @return {Returns property details}
  */
 exports.getPropertyDocumentsDetails = (propertyId, userId) => {
	 try {
		 return new Promise(function(resolve, reject) {
			 userProperty.aggregate([{
					 "$lookup": {
						 "from": "propertyDocuments",
						 "localField": "propertyId",
						 "foreignField": "propertyId",
						 "as": "propertyDocuments"
					 }
				 }])
				 .sort({
					 createdAt: 1
				 })
				 .match({
					 userId: userId,
					 propertyId: propertyId
				 })
				 .then(function(property) {
					 resolve(property);
				 })
				 .catch(function(err) {
					 logger.error("Property controller : ", err);
					 reject(err);
				 });
		 });
	 } catch (e) {
		 logger.warn("Property controller : ", e.message);
		 reject(e.message);
	 }
 }
 
 /**
  * @name getUserRequestList
  * @description {To getUserRequest list }
  * @param {any} userId
  * @returns {Returns property details}
  */
 
 exports.getUserRequestList = (userId) => {
	 try {
		 const contractRequests = userContracts.aggregate([
		{
			"$lookup": {
				"from": "userContractTermination",
				"localField": "_id",
				"foreignField": "contractId",
				"as": "propertyDetails"
			}
		}
	]).sort({
		createdAt: 1
	}).match({
		userId: userId
	});
		 const maintenanceRequests = userMaintenanceRequests.aggregate([{
				 "$project": {
					 "propertyObjId": {
						 "$toObjectId": "$propertyId"
					 },
					 "maintenanceTypeId": {
						 "$toInt": "$maintenanceRequestTypeId"
					 },
					 userId: "$userId",
					 propertyId: "$propertyId",
					 status: "$status",
					 visitDate: "$visitDate",
					 visitTime: "$visitTime",
					 comments: "$comments",
					 photos: "$photos",
					 audioMessage: "$audioMessage",
					 inspectionUserId: "$inspectionUserId",
					 inspectionDateTime: "$inspectionDateTime"
				 }
			 },
			 {
				 "$lookup": {
					 "from": "maintenanceRequestTypes",
					 "localField": "maintenanceTypeId",
					 "foreignField": "_id",
					 "as": "maintenanceRequestType"
				 }
			 },
			 {
				 "$lookup": {
					 "from": "property",
					 "localField": "propertyObjId",
					 "foreignField": "_id",
					 "as": "propertyDetails"
				 }
			 }
		 ]).sort({
			 createdAt: 1
		 }).match({
			 userId: userId
		 });
		 return new Promise(function(resolve, reject) {
			 Promise.all([contractRequests, maintenanceRequests]).then((values) => {
				 var response = {
					 "contractRequests": values[0],
					 "maintenanceRequests": values[1]
				 };
				 resolve(response);
			 });
		 });
	 } catch (err) {
		 logger.error('Error', err);
		 reject(err);
	 }
 };