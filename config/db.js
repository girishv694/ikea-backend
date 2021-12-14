const mongoose = require("mongoose")
const express = require('express')

const connect = () =>{
    return mongoose.connect('mongodb+srv://girishv694:8762331996@cluster0.wom9a.mongodb.net/ikea-clone?retryWrites=true&w=majority')
}
module.exports = connect;
