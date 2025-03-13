import {NextFunction, Request, Response } from "express";
import * as yup from 'yup';

 const schema = yup.object().shape({
    Email: yup.string().required('Campo é obrigatório').email("Deve ser um email válido"),
    Senha: yup.string().required("campo obrigatório")
 })
export const singUpEmail = (req:Request ,res: Response, next: NextFunction)=> {

    schema.validate(req.body).then(()=>{
        res.render("../../../views/passos/passo1", {
            email: req.body["Email"]
        })
    }).catch(()=> {
       res.redirect("/")
    })
   
}
export const singUpSenha= (req: Request,res: Response, next: NextFunction)=> {
    schema.validate(req.body).then(()=>{
        res.render("../../../views/passos/passo2", {
        })
    }).catch(()=> {
       res.redirect("/")
    })
}


// export const areaCriaçao = (req: Request, res: Response)=> {
//     res.render('../../../views/passos/paymentPicker')
// }