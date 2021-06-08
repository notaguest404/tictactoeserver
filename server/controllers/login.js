const db = require('../config/conn')

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

                res.json({
                    user: results,
                    code:200,
                    message: 'Successfully authenticate'
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