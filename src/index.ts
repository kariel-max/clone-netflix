import { server } from "./server/Server";
import express from "express";
import bodyParser from "body-parser";
import mustache from "mustache-express";
import path from "path";

const mainRoutes = require('./routes/index');

server.set('views', path.join(__dirname, 'view'));
server.set('view engine', 'mustache');
server.use(bodyParser.urlencoded({extended: true}))
server.engine('mustache', mustache());
server.use('public', express.static(path.join(__dirname, 'public')))
server.use(express.static('public'))


server.use(mainRoutes)

server.listen( process.env.PORT, ()=> {
    console.log('O servidor foi conectado!!!');
})