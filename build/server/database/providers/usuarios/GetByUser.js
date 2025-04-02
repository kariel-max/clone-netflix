"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByUser = void 0;
const models_1 = require("../../models");
const getByUser = (email, senha) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield models_1.IUsuario.findOne({
            where: {
                email: email,
                senha: senha
            }
        });
        if (result)
            return result;
        return new Error('Registro não encotrado');
    }
    catch (error) {
        console.log(error);
        return new Error('Error ao consultar o registro');
    }
});
exports.getByUser = getByUser;
