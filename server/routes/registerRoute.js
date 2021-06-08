const Register = require('../controllers/register');

module.exports = (app) => {
    app.post('/register', Register.post);
}