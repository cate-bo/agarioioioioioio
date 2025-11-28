const Players = require('./utility.mjs');

const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const path = require('path');
const game = require('./game.mjs');

app.use('/', express.static(path.join(__dirname, '..', 'www-root')));


io.on('connection', (socket) =>{
    console.log('connected');
    socket.on('increment', (number)=>{
        console.log(number);
        socket.emit('increment', number);
    });
    socket.on('play', ()=>{
        console.log('amogus');
    });
});



//serve test page
app.get('/testpage.html', (req, res) =>{
    res.sendFile(path.join(__dirname, '..', 'backend', 'testpage.html'));
})


//initialise and start update loop
init();

function init()
{
    //console.log(Players);
    //Players.push('amogus1');
    console.log(game.default);

    //setInterval(game_update, 1000);
}

async function game_update()
{
    console.log('io');
}

server.listen(3000, ()=>{
    console.log('localhost:3000');
});
