import { Request, Response } from "express";
import * as yup from "yup"

// construir uma validaçao de email e senha

const schema = yup.object().shape({
    Email: yup.string().required('campo obrigatório1').email("deve ser um Email válido"),
    senha: yup.string().required('campo obrigatório2').min(4, "deve ter no minimo 8 caracters")
})

export const singIn = async (req: Request ,res: Response)=> {
    schema.validate(req.body).then(()=> {
        res.render("../../../views/login/pageLogin")
    }).catch(()=> {console.log('erro de validacao')})
}
