/* 
 * FileName @master.handler
 * author @CriticalRiver
 * <summary>
 *  This is consist of master handlers which is required list of API's on which application will run
 *   @Type controller:|master controller { Consist of Services That will hep to performing operations related to masters}
 * </summary>
 */
const logger = require('log4js')
    .getLogger("MasterHandler");
const masterService = require('./master.controller');



/**
 * @name {interestList}
 * @description {This Handler method is used to get Master Data} 
 * @param {any} req 
 * @param {any} res 
 * @return {Returns Master data or not found }
 */
exports.interestList = (req, res) => {
    try {
        masterService.getInterestList(req.body)
            .then(function(interests) {
                res.status(200)
                    .send({
                        status: true,
                        message: 'Success',
                        code: 200,
                        data: interests
                    })
            })
            .catch(function(err) {
                logger.error("Master Handler", err);
                res.status(403)
                    .send({
                        status: false,
                        message: 'Interests Not Found',
                        code: 403,
                        data: {}
                    })
            });
    } catch (e) {
        logger.warn("Master Handler :", e.message);
        res.status(200)
            .send({
                status: false,
                message: e.message,
                data: {}
            });
    }
}

exports.termsConditions = (req, res) => {
    try {
        masterService.getTermsConditions(req.body)
            .then(function(interests) {
                res.status(200)
                    .send({
                        status: true,
                        message: 'Success',
                        code: 200,
                        data: interests
                    })
            })
            .catch(function(err) {
                logger.error("Master Handler :", err);
                res.status(403)
                    .send({
                        status: false,
                        message: 'Terms & Conditions Not Found',
                        code: 403,
                        data: {}
                    })
            });
    } catch (e) {
        logger.warn("Master Handler :", e.message);
        res.status(200)
            .send({
                status: false,
                message: e.message,
                data: {}
            });
    }
}

exports.subscriptionList = (req, res) => {
    try {
        masterService.getSubscriptionList(req.body)
            .then(function(subscriptions) {
                res.status(200)
                    .send({
                        status: true,
                        message: 'Success',
                        code: 200,
                        data: subscriptions
                    })
            })
            .catch(function(err) {
                logger.error("Master Handler :", err);
                res.status(403)
                    .send({
                        status: false,
                        message: 'Subscriptions Not Found',
                        code: 403,
                        data: {}
                    })
            });
    } catch (e) {
        logger.warn("Master Handler :", e.message);
        res.status(200)
            .send({
                status: false,
                message: e.message,
                data: {}
            });
    }
}

exports.maintenanceRequest = (req, res) => {
    try {
        masterService.getMaintenanceRequestList(req.body)
            .then(function(maintenanceRequests) {
                res.status(200)
                    .send({
                        status: true,
                        message: 'Success',
                        code: 200,
                        data: maintenanceRequests
                    })
            })
            .catch(function(err) {
                logger.error("Master Handler :", err);
                res.status(403)
                    .send({
                        status: false,
                        message: 'Subscriptions Not Found',
                        code: 403,
                        data: {}
                    })
            });
    } catch (e) {
        logger.warn("Master Handler :", e.message);
        res.status(200)
            .send({
                status: false,
                message: e.message,
                data: {}
            });
    }
}

exports.maintenanceRequestServices = (req, res) => {
    try {
        masterService.getmaintenanceRequestServicesList(req)
            .then(function(maintenanceRequests) {
                res.status(200)
                    .send({
                        status: true,
                        message: 'Success',
                        code: 200,
                        data: maintenanceRequests
                    })
            })
            .catch(function(err) {
                logger.error("Master Handler :", err);
                res.status(403)
                    .send({
                        status: false,
                        message: 'Subscriptions Not Found',
                        code: 403,
                        data: {}
                    })
            });
    } catch (e) {
        logger.warn("Master Handler :", e.message);
        res.status(200)
            .send({
                status: false,
                message: e.message,
                data: {}
            });
    }
}

exports.advertisements = (req, res) => {
    try {
        masterService.getadvertisementsList(req.body)
            .then(function(advertisements) {
                res.status(200)
                    .send({
                        status: true,
                        message: 'Success',
                        code: 200,
                        data: advertisements
                    })
            })
            .catch(function(err) {
                logger.error("Master Handler :", err);
                res.status(403)
                    .send({
                        status: false,
                        message: 'Advertisements Not Found',
                        code: 403,
                        data: {}
                    })
            });
    } catch (e) {
        logger.warn("Master Handler :", e.message);
        res.status(200)
            .send({
                status: false,
                message: e.message,
                data: {}
            });
    }
}

exports.offers = (req, res) => {
    try {
        masterService.getoffersList(req.body)
            .then(function(offers) {
                res.status(200)
                    .send({
                        status: true,
                        message: 'Success',
                        code: 200,
                        data: offers
                    })
            })
            .catch(function(err) {
                logger.error("Master Handler :", err);
                res.status(403)
                    .send({
                        status: false,
                        message: 'Offers Not Found',
                        code: 403,
                        data: {}
                    })
            });
    } catch (e) {
        logger.warn("Master Handler :", e.message);
        res.status(200)
            .send({
                status: false,
                message: e.message,
                data: {}
            });
    }
}

exports.getFaqs = (req, res) => {
   	try {
			masterService.getFaqs(req).then(function (advertisements) {
					res.status(200).send({
						status: true,
						message: 'Success',
						code:200,
						data:advertisements
					})            
			}).catch(function (err) {
				logger.error("Handler", err);
				res.status(403).send({
					status: false,
					message: 'Faqs Not Found',
					code:403, data: {}
				})
			});
		} catch (e) {
			logger.warn(e.message);
			res.status(200).send({ status: false, message: e.message, data: {} });
		}
}

exports.getFaqTypes = (req, res) => {
   	try {
			masterService.getFaqTypes(req).then(function (advertisements) {
					res.status(200).send({
						status: true,
						message: 'Success',
						code:200,
						data:advertisements
					})            
			}).catch(function (err) {
				logger.error("Handler", err);
				res.status(403).send({
					status: false,
					message: 'Faqs Not Found',
					code:403, data: {}
				})
			});
		} catch (e) {
			logger.warn(e.message);
			res.status(200).send({ status: false, message: e.message, data: {} });
		}
}