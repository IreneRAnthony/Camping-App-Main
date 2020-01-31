const express = require('express');
const app = express();
const path = require ('path');


app.use(express.json());
app.use(express.static( __dirname + '/public/dist/public' ));
// get all routes 
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });

require("./server/config/mongoose")

const server = app.listen(8000, () => console.log("Listening on port 8000"));
// server argument is used for sockets 
require('./server/config/routes.js')(app, server);

