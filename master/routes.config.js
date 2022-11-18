const masterHandler = require('./master.handler');
const authService = require('../services/auth.service');

exports.routesConfig = function(masterapp) {
    masterapp.get('/api/v1/interests', authService.authUser, [
        masterHandler.interestList
    ]);

    masterapp.get('/api/v1/termsConditions', authService.authUser, [
        masterHandler.termsConditions
    ]);

    masterapp.get('/api/v1/subscriptions', authService.authUser, [
        masterHandler.subscriptionList
    ]);

    masterapp.get('/api/v1/maintenanceRequest', authService.authUser, [
        masterHandler.maintenanceRequest
    ]);

    masterapp.get('/api/v1/maintenanceRequestServices/:id', authService.authUser, [
        masterHandler.maintenanceRequestServices
    ]);
    
    masterapp.get('/api/v1/advertisements', authService.authUser, [
        masterHandler.advertisements
    ]);

	masterapp.get('/api/v1/offers', authService.authUser, [
        masterHandler.offers
    ]);

    masterapp.get('/api/v1/faqs', [
        masterHandler.getFaqs
    ]);

	masterapp.get('/api/v1/faqTypes', [
        masterHandler.getFaqTypes
    ]);

};
