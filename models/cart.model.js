const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
   name : {type:String,required:true},
   subname:{type:String,required:true},
   image : {type:String,required:true},
   price : {type:Number,required:true},
   rating : {type:Number,required:true},
   image1 :{type:String,required:true},
   image2 : {type:String,required:true},
   image3 : {type:String,required:true},
   image4 : {type:String,required:true},
   description : {type:String,required:true}
   

},
{
   timestamps:true
})

const Product = mongoose.model('cart',productSchema);
module.exports = Product;