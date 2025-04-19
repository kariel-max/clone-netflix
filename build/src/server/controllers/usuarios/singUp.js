"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.autenticar = exports.singUpSenha = exports.singUpEmail = void 0;
const yup = __importStar(require("yup"));
const models_1 = require("../../database/models");
const path_1 = __importDefault(require("path"));
const dadosTemporarios = {};
const schemaEmail = yup.object().shape({
    Email: yup.string().required('Campo email é obrigatório').email("Deve ser um email válido")
});
const singUpEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        const { Email } = yield schemaEmail.validate(req.body);
        const id = req.ip;
        if (!dadosTemporarios[id])
            dadosTemporarios[id] = {};
        dadosTemporarios[id].email = Email;
        if (Email) {
            res.sendFile(path_1.default.join(__dirname, '../../../../views', 'passo1.html'));
        }
        ;
        console.log("dados do email armazenados!");
    }
    catch (error) {
        res.status(400).json({ Erro: error });
    }
});
exports.singUpEmail = singUpEmail;
const schemaSenha = yup.object().shape({
    Senha: yup.string().required("campo senha obrigatorio").min(4, "precisar de no mínimo 4 digítos")
});
const singUpSenha = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        const { Senha } = yield schemaSenha.validate(req.body);
        const id = req.ip;
        if (!dadosTemporarios[id])
            dadosTemporarios[id] = {};
        dadosTemporarios[id].senha = Senha;
        if (Senha) {
            res.sendFile(path_1.default.join(__dirname, '../../../../views', 'passo2.html'));
        }
        ;
        console.log("dados da senha armazenados!");
    }
    catch (error) {
        res.status(400).json({ Erro: error });
    }
});
exports.singUpSenha = singUpSenha;
const autenticar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.ip;
    const dados = dadosTemporarios[id];
    if (!dados || !dados.email || !dados.senha) {
        return res.status(400).json({ erro: "Email ou senha ausentes. certinfique-se de enviar ambos " });
    }
    try {
        const usuario = yield models_1.IUsuario.create({
            name: 'kariel',
            email: dados.email,
            senha: dados.senha
        });
        if (usuario) {
            res.sendFile(path_1.default.join(__dirname, '../../../../views', 'planform.html'));
            yield usuario.save();
        }
        else {
            res.status(401).json({ erro: "Email ou senha inválidos!" });
        }
    }
    catch (error) {
        res.status(500).json({ erro: "erro interno no Servidor." });
    }
});
exports.autenticar = autenticar;
