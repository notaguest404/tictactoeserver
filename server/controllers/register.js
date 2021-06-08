const db = require('../config/conn')

exports.post = (req, res) => {

    const user = {
        "username": req.body.username,
        "email": req.body.email,
        "password": req.body.password
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

    console.log('Registado')
}