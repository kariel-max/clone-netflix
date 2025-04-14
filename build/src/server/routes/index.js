"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const main_1 = require("../controllers/main");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", (_, res) => {
    res.render('../../../views/home/index');
});
router.get('/main', main_1.mainControlle.main);
