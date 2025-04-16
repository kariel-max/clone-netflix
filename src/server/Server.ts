import express from "express";
import 'dotenv/config'
import { router } from "./routes";
import path from "path";

const server = express();

server.set('views', path.join(__dirname, 'view'));
server.use('public', express.static(path.join(__dirname, 'public')))
server.use(express.static('public'))

server.use(router)


export { server };
