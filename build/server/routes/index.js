"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const controllers_1 = require("./../controllers");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", (_, res) => {
    res.render('../../../views/page/index');
});
router.get('/produtos', controllers_1.produtosControllers.GetAll);
router.post('/produtos', controllers_1.produtosControllers.Create);
router.get('/produtos/:id', controllers_1.produtosControllers.GetById);
router.put('/produtos/:id', controllers_1.produtosControllers.UpdateById);
router.delete('/produtos/:id', controllers_1.produtosControllers.DeleteById);
