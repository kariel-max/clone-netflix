import { RequestHandler, response } from "express";


export  const main: RequestHandler= async (req,res)=> {
    res.render("../../../views/home/main", {})
};