"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const path = require("path");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", (_, res) => {
    res.sendFile(path.join(__dirname, '../../../views', 'home', 'index.html'));
});
