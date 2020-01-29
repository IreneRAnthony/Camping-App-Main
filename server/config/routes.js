const user = require("../controllers/user.controller");
const trip = require('../controllers/trip.controller');
const task = require('../controllers/task.controller');
const location = require('../controllers/location.controller');

// added the server argument to the function for the sockets to work 
module.exports = function(app, server){
    // socket import 
    const io = require("socket.io")(server);
    app.get('/new/user', (req, res) => {
        user.createUser(req, res);
    })

    app.get('/login', (req, res) => {
        user.login(req, res);
    })

    app.post('/logout', user.logout)
    // the route for message board 
    app.get("/api/messages", (req, res) => {

        res.render("index");
    })
    // socket connection 
    io.on("connection", user.socketConnect);
}
