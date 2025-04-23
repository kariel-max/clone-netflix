import {RequestHandler} from "express";
import * as yup from 'yup';
import { IUsuario } from "../../database/models";
import path from "path";

 const schemaEmail = yup.object().shape({
    Email: yup.string().required('Campo email é obrigatório').email("Deve ser um email válido"),
    Senha: yup.string().required("campo senha obrigatorio").min(4, "precisar de no mínimo 4 digítos")
 })

export const cadastro:RequestHandler = (req, res)=> {
    res.sendFile(path.join(__dirname,'../../../../cadastro.html'))
}

export const singUp:RequestHandler = async (req,res)=> {
    console.log(req.body)
    const dados = await schemaEmail.validate(req.body)
    if (!dados || !dados.Email || !dados.Senha ) {
        return res.status(400).json({erro: "Email ou senha ausentes. certinfique-se de enviar ambos "})
    }
    try{
        const usuario: any = await IUsuario.create({
            name: 'kariel',
            email: dados.Email,
            senha: dados.Senha
        });
        if (usuario) {
            res.redirect(path.join(__dirname,'../../../../passo2.html'))
            await usuario.save();
          } else {
            res.status(401).json({ erro: "Email ou senha inválidos!" });
          }
    } catch (error) {
        res.status(500).json({erro: "erro interno no Servidor."});
    }
   
};


export const autenticar: RequestHandler = async (req, res) => {
    res.redirect(path.join(__dirname,'../../../../planform.html'))
      
}