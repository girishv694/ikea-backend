const mongoose = require('mongoose')

const express = require('express')
const router = express.Router();
const product = require('../models/products.model')

router.post('/products',async(req,res)=>{
    const prods = await product.create(req.body);

    res.status(200).send({prods})
})

module.exports = router;