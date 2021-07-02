const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true,
        unique : true
    },
    gender: String,
    age:String,
    status : String
})

const UserDb = mongoose.model(`userdb`, schema)

module.exports = UserDb