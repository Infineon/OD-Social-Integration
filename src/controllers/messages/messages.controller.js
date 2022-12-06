/** FileName @messages.controller
 * author @Sudhakar
 * <summary>
 *  DAO for performing Database related operation in mySQLDB for master schema
 *  <npm>
 *      @log4js {Used for logging debug,information and errors in master module}
 *  </npm>
 * </summary>
 */


 const log4js = require('log4js');
 const logger = log4js.getLogger("messagesController");
 const axios = require('axios').default;
//  const messages = require('./model/messages.model');

 const  db = require('../../models/index');
//  const mySQLDB = require('../services/mysql.service');
 const {Op, where} =require('sequelize');

 //fetchmessagesByID
 
const creatMessage = async (req,res)=>{
	try{
		const reqBody = req.body;
		const Obj ={
			messageid:reqBody.messageid,
			messagesocialid: reqBody.messagesocialid,
			messagetext:reqBody.messagetext,
			messagedate: new Date()
		}
		
		const saveMsg =await db.messages.create(Obj);
		return res.status(200).send({Success:true,data:saveMsg,message:'message saved successfully'})
	}catch(ex){
		return res.status(500).send({msg:ex.message})
	}
}
const  fetchmessagesByID = async (req,res)=>{
	const reqParams = req.params;
	if(reqParams.ID == null){
		
		res.status(404).send({Success:false,message:"Invalid Id"})
	}
	try{
		var condition = {messagesocialid: {
			[Op.eq]: reqParams.ID
		  }}
		
		let response = await db.messages.findAll({where : condition});
		return res.status(200).send({Success:true,data:response, message :''})

	}catch(ex){
		return res.status(500).send({msg:ex.message})
	}
}
 
module.exports ={fetchmessagesByID,creatMessage}
 
 
