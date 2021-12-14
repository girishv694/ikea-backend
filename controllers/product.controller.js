const mongoose = require('mongoose')

const express = require('express')
const router = express.Router();
const product = require('../models/products.model')

router.post('/products',async(req,res)=>{
    const prods = await product.create(req.body);

    res.status(200).send({prods})
})

router.get('/products/:data',async(req,res)=>{
    const dy = req.params.data
    console.log(dy);
    // const data = await product.find({subname : {'$regex':'Study','$options':'i'}});
    const data = await product.find({$or :[{subname : {'$regex':`${dy}`,'$options':'i'}},{subname:{'$regex':`${dy}`,'$options':'i'}}]})
    res.status(200).send({data});
})

router.get('/product/:id',async(req,res)=>{
    const id = req.params.id;
    const data1 = await product.findById(id) ;
    res.status(200).send({data1});
})
module.exports = router;