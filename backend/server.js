const express = require('express');
const http_server = require('http').createServer(express);
const {Server} = require('socket.io');

const app = express();
const io = new Server(http_server);

//express.static()





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

http_server.listen(8080);