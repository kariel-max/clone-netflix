"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const main_1 = require("../controllers/main");
const path = require("path");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", (_, res) => {
    res.sendFile(path.join(__dirname, '../../../views', 'home', 'index.html'));
});
router.get('/main', main_1.mainControlle.main);
