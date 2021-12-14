const express = require('express')
const app = express();
const connect = require('./config/db')
const user = require('./controllers/user.controller')


app.use(express.json())
app.use('/user',user);

app.listen(3001,async ()=>{
    await connect();
    console.log("DB connected and Server started on port 3001")
})