const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();
const user = require('../models/user.model');

router.post('/user',async(req,res)=>{

    console.log(req.body)
    const use = await user.create(req.body);

    
    res.status(200).send({use})
})

module.exports = router;


