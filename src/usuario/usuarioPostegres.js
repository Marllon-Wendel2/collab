"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioPostgres = void 0;
var index_js_1 = require("../database/index.js");
var UsuarioPostgres = /** @class */ (function () {
    function UsuarioPostgres() {
        this.db = index_js_1.default;
    }
    UsuarioPostgres.prototype.postUser = function (newUser) {
        return __awaiter(this, void 0, void 0, function () {
            var erro_1, errorMenssage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!(!newUser.id || !newUser.name || !newUser.cpf_cnpj || !newUser.email || !newUser.password || !newUser.data_created)) return [3 /*break*/, 1];
                        throw new Error("Body incompleto");
                    case 1: return [4 /*yield*/, this.db.none("INSERT INTO users(id, name, cpf_cnpj, email, password, date_created) VALUES ($1, $2, $3, $4, $5, $6)", [newUser.id, newUser.name, newUser.cpf_cnpj, newUser.email, newUser.password, newUser.data_created])];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, { success: true, message: "User created sucessfully" }];
                    case 4:
                        erro_1 = _a.sent();
                        errorMenssage = erro_1.message;
                        return [2 /*return*/, { success: false, message: errorMenssage }];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    UsuarioPostgres.prototype.findUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var storeUsers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.manyOrNone("SELECT * FROM users")];
                    case 1:
                        storeUsers = _a.sent();
                        if (storeUsers) {
                            return [2 /*return*/, storeUsers];
                        }
                        else {
                            throw new Error('Usuarios não encontrados');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UsuarioPostgres.prototype.findUsersById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var storeUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.oneOrNone("SELECT * FROM users WHERE id = $1", id)];
                    case 1:
                        storeUser = _a.sent();
                        if (storeUser) {
                            return [2 /*return*/, storeUser];
                        }
                        else {
                            throw new Error('Usuario não encontrado');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UsuarioPostgres.prototype.updateUser = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var erro_2, errorMenssage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 9, , 10]);
                        if (!data.name) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.db.none("UPDATE users SET name = $1 WHERE id = $2", [data.name, id])];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!data.cpf_cnpj) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.db.none("UPDATE users SET cpf_cnpj = $1 WHERE id = $2", [data.cpf_cnpj, id])];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        if (!data.email) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.db.none("UPDATE users SET email = $1 WHERE id = $2", [data.email, id])];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6:
                        if (!data.password) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.db.none("UPDATE users SET password = $1 WHERE id = $2", [data.password, id])];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8: return [2 /*return*/, { success: true, message: "User updated successfully" }];
                    case 9:
                        erro_2 = _a.sent();
                        errorMenssage = erro_2.message;
                        return [2 /*return*/, { success: false, message: errorMenssage }];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    UsuarioPostgres.prototype.deleteUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var erro_3, errorMenssage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.db.none("DELETE FROM users WHERE ID = $1", id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, { success: true, message: "Deletad sucess" }];
                    case 2:
                        erro_3 = _a.sent();
                        errorMenssage = erro_3.message;
                        return [2 /*return*/, { success: false, message: errorMenssage }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return UsuarioPostgres;
}());
exports.UsuarioPostgres = UsuarioPostgres;
