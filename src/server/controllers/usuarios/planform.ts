import {RequestHandler} from "express";
export const planform: RequestHandler = (req, res)=> {
    res.render("../../../public/views/passos/planform")
}