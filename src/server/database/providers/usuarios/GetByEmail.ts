import { IUsuario } from "../../models";

export const getByEmail = async (email: string): Promise<IUsuario | Error> => {
    try{
        const result = await IUsuario.findOne({
            where: {
                email: email
            }
        })
        if (result) return result

        return new Error('Registro não encotrado');
    } catch (error) {
        console.log(error);
        return new Error('Error ao consultar o registro');
    }
}