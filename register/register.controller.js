const bcrypt = require("bcrypt");
const User = require("../db/userModel");

function register(req, res, next){
    bcrypt
        .hash(req.body.password, 10)
        .then((hashedPass)=> {
            const user = new User({
                email: req.body.email,
                password: hashedPass
            })

    user
        .save()
        .then((result)=> {
            res.status(201).send({
                message: "User created successfully",
                result
            })
        })
        .catch((err)=> {
            res.status(500).send({
                message: "Error creating user",
                err
            })
        })
    })
    .catch((err)=> {
        res.status(500).send({
            message: "Password was not hashed successfully",
            err
        })
    })
}

module.exports = {
    register: [register]
}