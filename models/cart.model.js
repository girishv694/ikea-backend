const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
   name : {type:String,required:true},
   subname:{type:String,required:true},
   image : {type:String,required:true},
   price : {type:Number,required:true},
   rating : {type:Number,required:true},
   category : {type:String,required:true}

})

const Product = mongoose.model('cart',productSchema);
module.exports = Product;