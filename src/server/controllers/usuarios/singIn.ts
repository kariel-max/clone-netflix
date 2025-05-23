import { Request, Response } from "express";
import * as yup from "yup"
import { usuariosProvider } from "../../database/providers/usuarios";

// construir uma validaçao de email e senha

const schema = yup.object().shape({
    Email: yup.string().required('campo obrigatório1').email("deve ser um Email válido"),
    senha: yup.string().required('campo obrigatório2').min(4, "deve ter no minimo 8 caracters")
})

export const singIn = async (req: Request ,res: Response)=> {
    try {
         const usuario = await schema.validate(req.body)
         if (usuario) {
            const getUser = await usuariosProvider.getByUser(usuario.Email, usuario.senha)

            if (getUser instanceof Error) {
                return res.status(404).json({
                    errors: {
                        default: 'Email ou Senha inválido!'
                    }
                })
            }
            console.log(getUser instanceof Error)
         }
    }catch (error) {
        console.log('error em login', error)
    }
}
