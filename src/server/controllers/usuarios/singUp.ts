import { Request, Response } from "express";

export const singUp = (req: Request ,res: Response)=> {
    res.render("../../../views/passos/passo1")
}

export const areaCriaçao = (req: Request, res: Response)=> {
    res.render('../../../views/passos/paymentPicker')
}