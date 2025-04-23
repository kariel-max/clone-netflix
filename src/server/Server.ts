import express from "express";
import 'dotenv/config'
import { router } from "./routes";
import path from "path";
import bodyParser from "body-parser";
import cors from "cors"

const server = express();

server.use(cors({
    origin: "https://680939b022c94500087fea33--cloneflixkariel.netlify.app",
    methods: ['GET', 'POST']
}))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }));
server.set('views', path.join(__dirname, 'view'));
server.use('public', express.static(path.join(__dirname, 'public')))
server.use(express.static('public'))


server.use(router)


export { server };
