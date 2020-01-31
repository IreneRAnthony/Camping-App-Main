const user = require("../controllers/user.controller");
//used for sockets 
const documents = {};

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

    // socket connection 
    io.on("connection", socket => {
        let previousId;
        const safeJoin = currentId => {
            socket.leave(previousId);
            socket.join(currentId, () => console.log(`Socket ${socket.id} joined room ${currentId}`));
            previousId = currentId;
        }
    
        socket.on('getDoc', docId => {
            safeJoin(docId);
            socket.emit('document', documents[docId]);
        });
    
        socket.on('addDoc', doc => {
            documents[doc.id] = doc;
            safeJoin(doc.id);
            io.emit('documents', Object.keys(documents));
            socket.emit('document', doc);
        });
    
        socket.on('editDoc', doc => {
            if (doc){
                documents[doc.id] = doc;
                socket.to(doc.id).emit('document', doc);
            }
        });
    
        io.emit('documents', Object.keys(documents));
    
        console.log(`Socket ${socket.id} has connected`);
    });
}
