const express = require('express')
const router =express.Router()
const User = require('../model/userSchema')
router.get('/',async (req,res)=>{
    try{
    const data = await User.find();
    res.status(201).send(data);
    }catch(err){
        res.status(500).send({message:err})
    }
})
router.post('/',async (req,res)=>{
    try{
        const {_id,name,email,password}=req.body;
    const newUser = new User({_id,name,email,password});
    await newUser.save();
    res.status(201).send({message:"User Saved"})

    }catch(ERR){
        res.status(500).send({message:ERR})
    }
})

module.exports=router