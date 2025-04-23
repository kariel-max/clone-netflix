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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./server/Server");
const sequelize_1 = __importDefault(require("./server/database/Sequelize/sequelize"));
Server_1.server.listen(process.env.PORT, () => {
    console.log(' foi conectado!!!');
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelize_1.default.authenticate();
        console.log('Conexão bem-sucedida!');
        yield sequelize_1.default.sync({ alter: true });
        console.log('Banco de dados sincronizado!');
    }
    catch (error) {
        console.error('erro ao sincronizar banco:', error);
    }
    finally {
        yield sequelize_1.default.close();
    }
}))();
