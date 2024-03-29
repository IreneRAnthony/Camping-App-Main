const express = require('express');
const cors = require('cors');
const app = express();app.use(cors());


app.use(express.json());
app.use(express.static( __dirname + '/public/dist/public' ));
// used for sockets 
app.use(express.urlencoded({
    extended: true
}));

const session = require('express-session');
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

require("./server/config/mongoose")

const server = app.listen(8000, () => console.log("Listening on port 8000"));
// server argument is used for sockets 
require('./server/config/routes.js')(app, server);

app.all("*", (req,res) => {
  res.sendFile(path.join(__dirname, "./public/dist/public/index.html"))
});


