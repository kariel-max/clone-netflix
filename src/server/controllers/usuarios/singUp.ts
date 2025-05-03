import {RequestHandler} from "express";
import * as yup from 'yup';
import { IUsuario } from "../../database/models/usuario";
import path from "path";

 const schema = yup.object().shape({
    Email: yup.string().required('Campo email é obrigatório').email("Deve ser um email válido"),
    Senha: yup.string().required("campo senha obrigatorio").min(4, "precisar de no mínimo 4 digítos")
 })

export const cadastro:RequestHandler = (req, res)=> {
    res.sendFile(path.join(__dirname,'../../../../cadastro.html'))
}

export const getForm:RequestHandler = (req, res)=> {
    res.sendFile(path.join(__dirname,'../../../../passo1.html'))
}

export const singUp:RequestHandler = async (req,res)=> {
   
    try{
        const dados: {Email: String, Senha: String} = await schema.validate(req.body)
        if (!dados || !dados.Email || !dados.Senha ) {
            return res.status(400).json({erro: "Email ou senha ausentes. certinfique-se de enviar ambos "})
        }
       
        const usuario = await IUsuario.create({
        email: dados.Email,
        senha: dados.Senha
        });
        
        if (usuario) {
            res.redirect('/cadastro/autenticar')
            await usuario.save()
          } else {
            res.status(401).json({ erro: "Email ou senha inválidos!" });
            return
          }
    } catch (error) {
        res.status(500).json({erro: "erro interno no Servidor."});
    }
   
};


export const autenticar: RequestHandler = async (req, res) => {
    res.sendFile(path.join(__dirname,'../../../../autenticar.html'))
      
}