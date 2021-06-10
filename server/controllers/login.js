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
                        if ( response == false) {
                            res.json({
                                code: 400,
                                status:false,
                                message: "Email and password does not match"
                            });
                            res.status(400)
                        } else {
                            res.json({
                                code: 200,
                                results, 
                                status:true,
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

exports.get = (req, res) => {

    //User id
    var id = req.params;
    console.log(id)

    //Database query to select all projects
    db.query('SELECT user.id AS id, user.username AS username, user.email AS email, user.location as location, user.image as image FROM user WHERE id=?', [id.userId], function (error, results) {
    if(error) {
        
        console.log("erro")
            res.json({
                status:401,
                message: 'There are some error with query'
            })
        } 
        else {
            
            console.log("id", [id.userId])
            console.log("results:", results)
            res.json({
                status:200,
                results
            });        
        }
    });
}

exports.put =(req, res) => {

    const id = req.params
    const username = req.body.username
    const email = req.body.email
    const location = req.body.location
    const image = req.body.image

    //Update project information
    let data = [username, email,location, image, id.userId];

    //Database query to update project
    db.query('UPDATE user SET username = ?, email = ?, location = ?, image = ?  WHERE id = ?', data, function(error, results){
        if(error) {
            console.log(error)
            res.json({
                status:401,
                message: 'There are some error with query'
            })
        } else {
            console.log(results)
            res.json({
                status:200,
                results
            })
        }
    });
}