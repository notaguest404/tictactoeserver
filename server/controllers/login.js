const db = require('../config/conn')
const bcrypt = require('bcryptjs');

exports.post = (req, res) => {

    const email = req.body.email
    const password = req.body.password

    db.query('SELECT * FROM user WHERE email = ?', [email], function (error, results, fields){
        if(error) {
            res.json({
                status:false, 
                message: 'There are some error with query'
            })
        } else {

            if(results.length > 0) {

                console.log(results)

                //Check if the password is correct
                bcrypt.compare(password, results[0].password, function (err, response) {

                    if (err) {

                        console.log("Erro: ", err)

                    } else {

                        res.json({
                            user: results,
                            code:200,
                            message: 'Successfully authenticate'
                        })

                    }
                })

            } else {

                res.json({
                    status:400,
                    message: "Please enter valid information."
                });
                console.log("Error:", error)
            }
        }
    });

}