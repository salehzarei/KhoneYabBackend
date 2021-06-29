const express = require("express")
const route = express.Router()
const controller = require('../controller/controller')


route.get('/', (req, res) => {
    res.send("Test OK")
})


route.post('/users', controller.create)
route.get('/users', controller.find)
route.put('/users/:id', controller.update)
route.delete('/users/:id', controller.delete)

module.exports = route