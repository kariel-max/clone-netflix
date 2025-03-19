import { IUsuario } from "../../models";

export const create = async ( emailValidado: string, senhaValidada: string)=> {
    await IUsuario.create({email: emailValidado, senha: senhaValidada});
    console.log("validação comcluida");
}