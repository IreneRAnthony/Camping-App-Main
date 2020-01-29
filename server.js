const express = require('express');
const app = express();



app.use(express.json());
app.use(express.static( __dirname + '/public/dist/public' ));
// used for sockets 
app.use(express.urlencoded({
    extended: true
}));

require("./server/config/mongoose")

const server = app.listen(8000, () => console.log("Listening on port 8000"));
// server argument is used for sockets 
require('./server/config/routes.js')(app, server);

