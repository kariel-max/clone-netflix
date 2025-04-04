import express from "express";
import 'dotenv/config'
import { router } from "./routes";
import bodyParser from "body-parser";
import mustache from "mustache-express";
import path from "path";

const server = express();

server.set('views', path.join(__dirname, 'view'));
server.set('view engine', 'mustache');
server.engine('mustache', mustache());
server.use(bodyParser.urlencoded({extended: true}))
server.use('public', express.static(path.join(__dirname, 'public')))
server.use(express.static('public'))

server.use(router)


export { server };
