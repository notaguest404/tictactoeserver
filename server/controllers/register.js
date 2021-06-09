const db = require('../config/conn')
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const BCRYPT_SALT_ROUNDS = 12

exports.post = (req, res) => {

    bcrypt
        .hash(req.body.password, BCRYPT_SALT_ROUNDS)
        .then(hash => {
            var user = {
                "id": uuidv4(),
                "username": req.body.username,
                "email": req.body.email,
                "password": hash
            }

        db.query('INSERT INTO user SET?', user, function(error){
        if(error) {
            res.json({
                code:401, 
                message: 'There are some error with query'
            })
        } else {
            res.json({
                code:200, 
                message:'User registered sucessfully'
            })
        }
    });

    })
}