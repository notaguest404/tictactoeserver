const db = require('mysql');

const connection = db.createConnection({
    host     : 'eu-cdbr-west-01.cleardb.com',
    database : 'heroku_6cb4732b6d8660c',
    user     : 'bfb49ec1a62e94',
    password : '44d98088',
})

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
})

module.exports = connection;

//mysql://bfb49ec1a62e94:44d98088@eu-cdbr-west-01.cleardb.com/heroku_6cb4732b6d8660c?reconnect=true