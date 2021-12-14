const express = require('express')
const app = express();
const connect = require('./config/db')
const user = require('./controllers/user.controller')
const products = require('./controllers/product.controller')

app.use(express.json())
app.use('/user',user);
app.use('/post/',products);
app.use('/get/',products);
app.listen(3001,async ()=>{
    await connect();
    console.log("DB connected and Server started on port 3001")
})