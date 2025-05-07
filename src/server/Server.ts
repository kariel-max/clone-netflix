import express from "express";
import 'dotenv/config'
import { router } from "./routes";
import path from "path";
import bodyParser from "body-parser";

const server = express();

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // Ou especifique o domínio correto
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }));
server.use('public', express.static(path.join(__dirname, 'public')))
server.use(express.static('public'))


server.use(router)


export { server };
