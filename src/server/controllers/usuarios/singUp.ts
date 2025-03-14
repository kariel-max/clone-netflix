import {RequestHandler} from "express";
import * as yup from 'yup';

 const schemaEmail = yup.object().shape({
    Email: yup.string().required('Campo email é obrigatório').email("Deve ser um email válido")
 })
export const singUpEmail:RequestHandler = async (req,res)=> {

    try {
        schemaEmail.validate(req.body).then(()=>{
            res.render("../../../views/passos/passo1", {
                email: req.body["Email"]
    
        })
    })
    } catch(erro) {
        res.redirect("/")
    }
   
}

    const schemaSenha = yup.object().shape({
        Senha: yup.string().required("campo senha obrigatorio").min(4, "precisar de no mínimo 4 digítos")
    })
export const singUpSenha:RequestHandler = async (req,res)=> {

    try {
        schemaSenha.validate(req.body).then(()=> {
            res.render("../../../views/passos/passo2")
        })
    } catch(erro) {
        res.redirect("/")
        console.log('erro em senha')
    }
}