const db = require('../config/conn')
const bcrypt = require('bcryptjs');

exports.post = (req, res) => {

    const email = req.body.email
    const password = req.body.password

    let data = [email,password];

    db.query('SELECT user.id AS id, user.username AS username, user.email AS email FROM user WHERE email = ? AND password = ?', data, function (error, results){
        if(error) {
            res.json({
                status:401, 
                message: ('There are some error with query')
            })
            console.log("Error:", error)
        } else {

            if(results.length > 0) {
                
                //Check if the password is correct
                bcrypt.compare(password, results[0].password, function (err, response) {

                    if (err) {

                        console.log("Erro: ", err)

                    } else {
    
                        
                        if ( response == false) {
                            
                            console.log("bcrypt falsa")
                            //Email exists, but password is incorrect
                            //Keep message below for security reasons by not indicating what the error was
                            res.json({
                                status:false,
                                message: "Email and password does not match"
                            });
                            res.status(400)

                        } else {

                            console.log("bcrypt verdadeira")
                            res.json({
                                user: results,
                                code:200,
                                message: 'Successfully authenticate'
                            })
                        } 
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