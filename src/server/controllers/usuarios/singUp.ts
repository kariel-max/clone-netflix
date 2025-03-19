import {RequestHandler, response,request} from "express";
import * as yup from 'yup';
//import { usuariosProvider } from "../../database/providers/usuarios";
import { IUsuario } from "../../database/models";

const dadosTemporarios: Record<string, { email?: string; senha?: string }> = {};

 const schemaEmail = yup.object().shape({
    Email: yup.string().required('Campo email é obrigatório').email("Deve ser um email válido")
 })
 const schemaSenha = yup.object().shape({
    Senha: yup.string().required("campo senha obrigatorio").min(4, "precisar de no mínimo 4 digítos")
})

export const singUpEmail:RequestHandler = async (req,res)=> {

    try {
        const { Email } = await schemaEmail.validate(req.body);
        const id = req.ip;
        if (!dadosTemporarios[id]) dadosTemporarios[id] = {};
        dadosTemporarios[id].email = Email
        if (Email) {
            res.render("../../../views/passos/passo1", {
                email: req.body["Email"]
            })
        };
        console.log("dados do email armazenados!")
    } catch(error) {
        res.status(400).json({Erro: error})
    }
   
};

export const singUpSenha:RequestHandler = async (req,res)=> {

    try {
        const { Senha } = await schemaSenha.validate(req.body);
        const id = req.ip;
    if (!dadosTemporarios[id]) dadosTemporarios[id] = {};
    dadosTemporarios[id].senha = Senha;
        if (Senha) {
            res.render("../../../views/passos/passo2")
        };
        console.log("dados da senha armazenados!")
    } catch(error) {
        res.status(400).json({Erro: error})
    }
};

export const autenticar: RequestHandler = async (req, res) => {
    const id = req.ip;
    const dados = dadosTemporarios[id];
    console.log(dados.senha)
    if (!dados || !dados.email || !dados.senha ) {
        return res.status(400).json({erro: "Email ou senha ausentes. certinfique-se de enviar ambos "})
    }
    try{
        const usuario = await IUsuario.create();
        if (usuario) {
            res.status(200).json({ mensagem: "Usuário autenticado com sucesso!" });
          } else {
            res.status(401).json({ erro: "Email ou senha inválidos!" });
          }
          return new Error('dfafgadsf')
    } catch (error) {
        res.status(500).json({erro: "erro interno no Servidor."});
    }
}