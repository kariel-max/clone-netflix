"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const routes_1 = require("./routes");
const body_parser_1 = __importDefault(require("body-parser"));
const mustache_express_1 = __importDefault(require("mustache-express"));
const path_1 = __importDefault(require("path"));
const server = (0, express_1.default)();
exports.server = server;
server.set('views', path_1.default.join(__dirname, 'view'));
server.set('view engine', 'mustache');
server.use(body_parser_1.default.urlencoded({ extended: true }));
server.engine('mustache', (0, mustache_express_1.default)());
server.use('public', express_1.default.static(path_1.default.join(__dirname, 'public')));
server.use(express_1.default.static('public'));
server.use(routes_1.router);