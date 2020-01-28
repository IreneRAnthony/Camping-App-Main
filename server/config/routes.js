const user = require("../controllers/user.controller")

module.exports = function(app){
    app.post('/new/user', (req, res) => {
        user.createUser(req, res);
    })
}
