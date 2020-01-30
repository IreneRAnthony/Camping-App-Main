const user = require("../controllers/user.controller");
const trip = require('../controllers/trip.controller');
const task = require('../controllers/task.controller');
const location = require('../controllers/location.controller');
const review = require('../controllers/review.controller');
const supply = require('../controllers/supply.controller');

// added the server argument to the function for the sockets to work 
module.exports = function(app, server){
    // socket import 
    const io = require("socket.io")(server);
    
    //All user CRUD
    app.get('/new/user', (req, res) => {
        user.createUser(req, res);
    })

    app.get('/login', (req, res) => {
        user.login(req, res);
    })

    app.post('/logout/user', (req, res) => {
        user.logout(req, res);
    })
    
    app.put('/update/user/:id', (req, res) => {
        user.updateUser(req, res);
    })

    app.delete('/delete/user/:id', (req, res) => {
        user.deleteUser(req, res);
    })

    app.get('/search/session/user', (req, res) =>{
        user.getUserInSession(req ,res);
    })
    
    app.get('/search/user/:id', (req, res) => {
        user.findUser(req, res);
    })

    
    
    app.post('/logout', user.logout)
    // the route for message board 
    app.get("/api/messages", (req, res) => {

        res.render("index");
    })
    // socket connection 
    io.on("connection", user.socketConnect);
    
    
    //All Trip CRUD
    app.get('/all/trip', (req, res) => {
        trip.allTrips(req, res);
    })

    app.get('/trip/search/:id', (req, res) => {
        trip.searchTrip(req, res);
    })
    
    app.get('/trip/search/user', (req, res) => {
        trip.searchTripByUser(req, res);
    })

    app.post('/new/trip', (req, res) => {
        trip.createTrip(req, res);
    })

    app.put('/update/trip/:id', (req, res) => {
        trip.updateTrip(req, res);
    })

    app.delete('/delete/trip/:id', (req, res) => {
        trip.deleteTrip(req, res);
    })

    //All Task CRUD
    app.post('/new/task', (req, res) => {
        task.createTask(req, res);
    })

    app.get('/all/task', (req, res) => {
        task.allTasks(req, res);
    })

    app.get('/task/search/:id', (req, res) => {
        task.searchTasks(req, res);
    })

    app.put('/update/task/:id', (req, res) => {
        task.updateTask(req, res);
    })

    app.delete('/delete/task/:id', (req, res) => {
        task.deleteTask(req, res);
    })

    //All Location CRUD
    app.post('/new/location', (req, res) => {
        location.createLocation(req ,res);
    })

    app.get('/all/location', (req, res) => {
        location.allLocations(req, res);
    })
    
    app.get('/searchbar/location/:name', (req, res)=> {
        location.locationSearchBar(req, res);
    })

    app.get('/search/location/:id', (req, res) => {
        location.searchLocation(req, res);
    })

    app.put('/update/location/:id', (req, res) => {
        location.updateLocation(req, res);
    })

    app.delete('/delete/location/:id', (req, res) => {
        location.deleteLocation(req, res);
    })
    
    // All Review CRUD

    app.get('/search/reviews', (req, res) => {
        review.getReview(req, res);
    })

    app.post('/new/review/:id', (req, res) => {
        review.createReview(req, res);
    })

    app.put('/update/review/:id', (req, res) => {
        review.updateReview(req, res);
    })

    app.delete('/delete/review/:id', (res, req) => {
        review.deleteReview(req, res);
    })
    
    
    //All Supply CRUD

    app.get('/search/supply/:id', (req, res) => {
        supply.getSupply(req, res);
    })

    app.get('/search/supply/find/:id', (req, res) => {
        supply.findSupply(req, res)
    })
    
    app.post('/new/supply', (req, res) => {
        supply.createSupply(req, res);
    })

    app.put('/update/supply/:id', (req, res) => {
        supply.updateSupply(req, res);
    })
    
    app.put('/update/supply/completed/:id', (req,res) => {
        supply.completeSupply(req, res);
    })

    app.delete('/delete/supply/:id', (req, res) => {
        supply.deleteSupply(req, res);
    })
}
