const register = require('./registerRoute')
const login = require('./loginRoute')

module.exports = (app) => {
    register(app)
    login(app)
}