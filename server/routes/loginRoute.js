const Login = require('../controllers/login');

module.exports = (app) => {
    app.post('/login', Login.post);
    app.get('/:userId', Login.get);
    app.put('/:userId', Login.put);
}