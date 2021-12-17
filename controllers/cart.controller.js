const mongoose = require('mongoose')

const express = require('express')
const router = express.Router();
const cart = require('../models/cart.model')
const product = require('../models/products.model')

router.post('/cart/:id',async(req,res)=>{
    const id = req.params.id;
    const data =await product.findById(id).lean().exec();
     cart.create(data)
    res.send({data})
})

router.get('/cart',async(req,res)=>{
    const data = await cart.find().lean().exec();
    res.status(200).send({data})
})

router.delete('/cart/delete/:id',async(req,res)=>{
    const id = req.params.id;
    const data = await cart.findByIdAndDelete(id).lean().exec();
    res.status(200).send({data})
})

module.exports = router;