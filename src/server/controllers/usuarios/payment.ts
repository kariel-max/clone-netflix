import {RequestHandler} from "express";

export const payment: RequestHandler = (req, res)=> {
    res.render("../../../public/views/passos/paymentPicker")
}