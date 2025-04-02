import {RequestHandler} from "express";
export const planform: RequestHandler = (req, res)=> {
    res.render("../../../views/passos/planform")
}