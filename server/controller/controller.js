var UserDb = require('../model/model')

//create and save user
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "content can not be emtpy!" })
        return
    }
    const user = new UserDb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    //save data in db
    user.save(user).then(data=>{
        res.send(data)
    }).catch(
        err =>{
            res.status(500).send({message:err.message || "some Error in Create User"})
        }
    )

},


    exports.find = (req, res) => {

    },

    exports.update = (req, res) => {

    }

exports.delete = (req, res) => {

}