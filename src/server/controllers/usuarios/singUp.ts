import {RequestHandler} from "express";
import * as yup from 'yup';
import { usuariosProvider } from "../../database/providers/usuarios";
import { IUsuario } from "../../database/models";

const dadosTemporarios: Record<string, { email?: string; senha?: string }> = {};

 const schemaEmail = yup.object().shape({
    Email: yup.string().required('Campo email é obrigatório').email("Deve ser um email válido")
 })

export const singUpEmail:RequestHandler = async (req,res)=> {

    try {
        const { Email } = await schemaEmail.validate(req.body);
        const id = req.ip;
        if (!dadosTemporarios[id]) dadosTemporarios[id] = {};
        dadosTemporarios[id].email = Email
        if (Email) {
            res.send('rotar create!!!')
        };
        console.log("dados do email armazenados!")
    } catch(error) {
        res.status(400).json({Erro: error})
    }
   
};

const schemaSenha = yup.object().shape({
    Senha: yup.string().required("campo senha obrigatorio").min(4, "precisar de no mínimo 4 digítos")
})

export const singUpSenha:RequestHandler = async (req,res) => {
    
    try {
        const { Senha } = await schemaSenha.validate(req.body);

        const id = req.ip;
        if (!dadosTemporarios[id]) dadosTemporarios[id] = {};
        dadosTemporarios[id].senha = Senha;
        if (Senha) {
            res.send('rotar create!!!')
        };
        console.log("dados da senha armazenados!")
    } catch(error) {
        res.status(400).json({Erro: error})
    }
};

export const autenticar: RequestHandler = async (req, res) => {
    const id = req.ip;
    const dados = dadosTemporarios[id];
    if (!dados || !dados.email || !dados.senha ) {
        return res.status(400).json({erro: "Email ou senha ausentes. certinfique-se de enviar ambos "})
    }
    try{
        const usuario: any = await IUsuario.create({
            name: 'kariel',
            email: dados.email,
            senha: dados.senha
        });
        if (usuario) {
            res.send('rotar create!!!')
            await usuario.save();
          } else {
            res.status(401).json({ erro: "Email ou senha inválidos!" });
          }
    } catch (error) {
        res.status(500).json({erro: "erro interno no Servidor."});
    }
}