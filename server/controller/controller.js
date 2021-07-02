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
        status: req.body.status,
        age:req.body.age
    })

    //save data in db
    user.save(user).then(data => {
        res.send(data)
    }).catch(
        err => {
            res.status(500).send({ message: err.message || "some Error in Create User" })
        }
    )

},


    exports.find = (req, res) => {

        // اگر پارامتر شناسه داشت در درخواست
        if (req.query.id) {

            UserDb.findById(req.query.id)
                .then(data => {
                    if (!data) {
                        res.status(404).send({ message: `Not Found User by ID ${req.query.id}` })
                    } else {
                        res.send(data)
                    }
                }).catch(err => {
                    res.status(500)
                        .send({ message: `Error to find User` })
                })

        } else {
            UserDb.find()
                .then(user => {
                    res.send(user)
                }).catch(
                    err => {
                        res.status(500).send({ message: err.message || "some Error in Create User" })
                    }
                )
        }
    },

    exports.update = (req, res) => {
        if (!req.body) {
            res.status(400)
                .send({ message: "Data not allow to mepty for update" })
        }
        UserDb.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
            .then(data => {
                if (!data) {
                    res.status(400).send({ message: `Can not Update User By ${req.params.id}, mabye user not find` })
                } else { res.send(data) }

            }).catch(err => {
                res.status(500).send({ message: `Error to Update User` })
            })

    }

exports.delete = (req, res) => {

    UserDb.findByIdAndDelete(req.params.id)
        .then(data => {
            if (!data) {
                res.status(404)
                    .send({ message: `Cant delete user with id : ${req.params.id} . myabe id not true` })
            } else {
                res.send({ message: `User Was Deleted Succesfuly` })
            }
        }).catch(err => {
            res.status(500)
                .send({ message: `Error To detele user` })
        })

}