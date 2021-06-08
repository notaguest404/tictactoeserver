const db = require('mysql');

const connection = db.createConnection({
    host     : 'eu-cdbr-west-01.cleardb.com',
    database : 'heroku_6cb4732b6d8660c',
    user     : 'bfb49ec1a62e94',
    password : '44d98088',
})

module.exports = connection;

//mysql://bfb49ec1a62e94:44d98088@eu-cdbr-west-01.cleardb.com/heroku_6cb4732b6d8660c?reconnect=true