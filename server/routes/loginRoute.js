const Login = require('../controllers/login');

module.exports = (app) => {
    app.post('/login', Login.post);
}