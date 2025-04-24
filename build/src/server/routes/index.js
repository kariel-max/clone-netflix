"use strict";
<<<<<<< HEAD
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const path = require("path");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", (_, res) => {
    res.sendFile(path.join(__dirname, '../../../index.html'));
});
=======
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const controllers_1 = require("./../controllers");
const usuarios_1 = require("../controllers/usuarios");
const main_1 = require("../controllers/main");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", (_, res) => {
    res.sendFile(path_1.default.join(__dirname, '../../../index.html'));
});
router.get("/cadastro", usuarios_1.usuariosControllers.cadastro);
router.post('/cadastro/singIn', usuarios_1.usuariosControllers.singIn);
router.get('/cadastro/form', usuarios_1.usuariosControllers.getForm);
router.post('/cadastro/singUp', usuarios_1.usuariosControllers.singUp);
router.get('/cadastro/autenticar', usuarios_1.usuariosControllers.autenticar);
router.post('/cadastro/paymentPick', usuarios_1.usuariosControllers.payment);
router.post('/cadastro/planform', usuarios_1.usuariosControllers.planform);
router.get('/main', main_1.mainControlle.main);
router.get('/produtos', controllers_1.produtosControllers.GetAll);
router.post('/produtos', controllers_1.produtosControllers.Create);
router.get('/produtos/:id', controllers_1.produtosControllers.GetById);
router.put('/produtos/:id', controllers_1.produtosControllers.UpdateById);
router.delete('/produtos/:id', controllers_1.produtosControllers.DeleteById);
>>>>>>> preview
