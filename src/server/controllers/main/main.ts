import { RequestHandler, response } from "express";
import path from "path";


export  const main: RequestHandler= async (req,res)=> {
     res.sendFile(path.join(__dirname,'../../../views', 'main.html'))
};