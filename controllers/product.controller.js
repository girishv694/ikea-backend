const mongoose = require('mongoose')

const express = require('express')
const router = express.Router();
const product = require('../models/products.model')

router.post('/products',async(req,res)=>{
    const prods = await product.create(req.body);

    res.status(200).send({prods})
})

router.get('/products/:data',async(req,res)=>{
    const dy = req.body;
    console.log(dy);
    // const data = await product.find({subname : {'$regex':'Study','$options':'i'}});
    const data = await product.find({$or :[{subname : {'$regex':'Study','$options':'i'}},{subname:{'$regex':"Lamp",'$options':'i'}}]})
    res.status(200).send({data});
})

module.exports = router;