
const utils =require('../utils/utils');



const express= require("express");
const User=require('../modals/user');
const jwt=require('jsonwebtoken');
const router=express.Router();
const fs = require('fs');
const multer = require('multer');
const path = require('path');
const JWT_SECRET=process.env.JWT_SECRET;



const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./uploads/");
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
  })
  
  const upload= multer({storage:storage});

  router.post('/dns',upload.single('uploadedfile') ,async (req, res) => {
    try {
      // Read the JSON file
      // Get the absolute path to the uploaded JSON file
      console.log(req.file.path);
      console.log(req.file);
      console.log(req.body);
    //   const id=req.body.HostedZoneId;
    const hostedZoneId = req.body.hostedZoneId;
    console.log("hostedZoneID" , hostedZoneId);
      const jsonFilePath = req.file.path;
  
      // // Read the uploaded JSON file
      const jsonData = fs.readFileSync(jsonFilePath, 'utf8')
      console.log(jsonData);
      console.log("--------------------------------");
      
      console.log("type",typeof(jsonData));
      
      const dnsRecordsData = JSON.parse(jsonData);
        console.log(dnsRecordsData);
      // Create DNS records from the JSON data
      const createdRecords = await Promise.all(dnsRecordsData.map(async (recordData) => {
        return await utils.addDNSRecord(hostedZoneId,recordData.recordName, recordData.recordType, recordData.recordValue, recordData.ttl);
      }));
  
      res.status(201).json(createdRecords);
    } catch (error) {
      console.error('Error creating some DNS records:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


router.post('/create', async (req,res)=>{
   
   
    try{

        const {Id, recordName, recordType, recordValue, ttl}=req.body;
        console.log("recordName ",recordName);
       const response=await utils.addDNSRecord(Id, recordName, recordType, recordValue, ttl);
       
       return res.status(200).json(response);
          
    }
    catch(errors){
        console.error(errors.message);
        res.status(500).json(errors.message);
    }
 
})


router.get('/list', async (req, res) => {
    try {
        const token = req.header('auth-token');
        // const authToken = "YOUR_AUTH_TOKEN_HERE"; // Use this line for testing
        console.log("authToken: " + token);
        
        const data = jwt.decode(token);
        console.log("data", data);
        
        const user = await User.findOne({ _id: data.user.id });

        // Check if user has hosted zones
        if (!user.hostedzone || user.hostedzone.length === 0) {
            return res.status(404).json({ message: "No hosted zones found for the user" });
        }

        // Array to store responses
        const responses = [];

        // Iterate through each hosted zone
        for (const zone of user.hostedzone) {
                if(zone.HostedZoneId){
            const response = await utils.listDNSRecords(zone.HostedZoneId);
                    if(response!=undefined) {
                        for(let i=0; i<response.length; i++) {
                            response[i].HostedZoneId=zone.HostedZoneId;
                        responses.push(response[i]);
                        }
                    }
                }
        }

        console.log("Responses:", responses);

        res.json(responses);
    } catch (errors) {
        console.error(errors.message);
        res.status(500).json("Some error found");
    }
})


router.put('/update', async (req,res)=>{
    try{
        const {Id, recordName, recordType, recordValue, ttl}=req.body;
        const response=await utils.updateDNSRecord(Id, recordName, recordType, recordValue, ttl);
        if(response.statusCode!=400)
        res.json(response);
        else 
        res.status(500).json(response.message);

    }
    catch(errors){
        console.error(errors.message);
        res.status(500).json("Some error found");
    }
})

router.delete('/', async (req,res)=>{
    try{
        const {Id, recordName, recordType, ttl,recordValue}=req.body;
        const response=await utils.deleteDNSRecord(Id,recordName, recordType, ttl,recordValue);
        
        res.json(response);
        
    }
    catch(errors){
        console.error(errors.message);
        res.status(500).json("Error Occur :"+errors);
    }
})


module.exports=router;