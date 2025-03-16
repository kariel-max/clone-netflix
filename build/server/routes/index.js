"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const controllers_1 = require("./../controllers");
const usuarios_1 = require("../controllers/usuarios");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", (_, res) => {
    res.render('../../../views/home/index');
});
router.post('/cadastro/singIn', usuarios_1.usuariosControllers.singIn);
router.post('/cadastro/singUpEmail', usuarios_1.usuariosControllers.singUpEmail);
router.post('/cadastro/singUpSenha', usuarios_1.usuariosControllers.singUpSenha);
router.post('/cadastro/paymentPick', usuarios_1.usuariosControllers.payment);
router.post('/cadastro/planform', usuarios_1.usuariosControllers.planform);
// router.get('/cadastro/singUp', usuariosControllers.areaCriaçao)
router.get('/produtos', controllers_1.produtosControllers.GetAll);
router.post('/produtos', controllers_1.produtosControllers.Create);
router.get('/produtos/:id', controllers_1.produtosControllers.GetById);
router.put('/produtos/:id', controllers_1.produtosControllers.UpdateById);
router.delete('/produtos/:id', controllers_1.produtosControllers.DeleteById);
