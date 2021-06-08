const { ipcRenderer } = require('electron')
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3002 });

const server = "offline";
clients = [];

console.log("Server Initialized")
console.log("The server may now receive and send messages through websockets.")

function isServerOnline() {
    if (server == offline)
        return false;
    else
        return true;
}

wss.on('connection', function connection(ws) {
    console.log("New turtle connected");
    clients.push(ws);
    //console.log(clients);
    // TODO: specify the name of the turtle connecting thanks to the label and set an ID
    // TODO: send the data only to the selected turtle thanks to the ID/label (label would be better I suppose...)
    ws.on('message', data => {
        //var msg = data.substring(0,7);
        console.log(data)
        wss.broadcast(JSON.stringify({ func: data }));
    });

    ws.on('close', () => {
        console.log("A turtle has disconnected")
    });
      
});

wss.broadcast = function broadcast(msg) {

    var parsedMsg = JSON.parse(msg);
    //console.log("truc" + msg);
    var checkMsg = parsedMsg.func.substring(0,7)
    var turtleName = parsedMsg.func.substring(0)

    // Thanks to that function, we can assert that the client is a turtle or not.
    if (checkMsg != "turtle.") {
        console.log("Ceci est un nom de turtle: " + turtleName)
        turtleName = checkMsg
    }
    //console.log(checkMsg);

    // Send the message to every client to know if they are the same turtle
    wss.clients.forEach(function each(client) {
        client.send(msg)
    }); 
    //clients[2].send("turtle?");
};