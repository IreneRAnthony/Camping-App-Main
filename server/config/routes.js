const user = require("../controllers/user.controller")

module.exports = function(app){
    app.get('/new/user', (req, res) => {
        user.createUser(req, res);
    })

    app.get('/login', (req, res) => {
        user.login(req, res);
    })

    app.post('/logout', (req, res) => {
        user.logout(req, res);
    })
}
