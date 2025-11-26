const io = require('socket.io');


//websocketserver
const server = new WebSocketServer({port: 8080});

wss.on('connection', function connection(ws){
    console.log('connected');
    ws.on('message', function message(data){
        console.log(JSON.parse(data));
        ws.send(JSON.stringify(data));
    })
})









//initialise and start update loop
init();

function init()
{


    //setInterval(game_update, 1000);
}

async function game_update()
{
    console.log('io');
}

