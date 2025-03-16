"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    port: Number(process.env.PG_PORT),
    database: process.env.PG_DB
});
