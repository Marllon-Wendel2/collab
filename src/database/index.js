"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg_promise_1 = require("pg-promise");
require("dotenv/config.js");
var pgp = (0, pg_promise_1.default)();
var db = pgp(process.env.STRING_DB);
exports.default = db;
