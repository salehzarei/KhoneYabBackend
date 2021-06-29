require('dotenv').config()

const express = require("express")
const connectDB = require('./server/database/connection')


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

connectDB()

app.use('/', require('./server/routes/router'))

app.listen(process.env.APP_PORT,()=>{
    console.log("Server is Run in port :",process.env.APP_PORT)
})