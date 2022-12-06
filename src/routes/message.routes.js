const authService = require('../services/auth.service');
const msgController = require('../controllers/messages/messages.controller')
const express = require('express');
const router = express.Router();
router.get('/check',(req,res)=>{
	res.send({message:"SUDHAKAR"})
})
router.get('/:ID',msgController.fetchmessagesByID);
router.post('/create',msgController.creatMessage)

module.exports =router;


