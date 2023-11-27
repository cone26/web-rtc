import express from "express";
import {fileURLToPath} from 'url';
import http from 'http';
import { WebSocketServer } from 'ws';

const app = express();
const __dirname = fileURLToPath(new URL(".", import.meta.url))
app.set('view engine', 'pug')
app.set('views', `${__dirname}/views`)
app.use('/public',express.static(`${__dirname}public`))

app.get('/',(req,res)=>res.render('home'))
const port = 3000;

const handleListen = () => console.log(`Listening on http://localhost:${port}`)
// app.listen(port, handleListen);

//http server
const server = http.createServer(app);
// create the ws server on the top of the http server
const wss = new WebSocketServer({ server });
// passed http server to WebSocket.Server() as a parameter
// => make both of servers are able to run in same port.

function handleConnection(socket) {
    console.log(socket)
}
wss.on("connection",handleConnection)
server.listen(port, handleListen);

