"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usuarioController_js_1 = require("./usuarioController.js");
var router = (0, express_1.Router)();
router.post('/', usuarioController_js_1.postUsuarios);
router.get('/', usuarioController_js_1.getUsuarios);
router.get('/:id', usuarioController_js_1.getUsuariosId);
router.put('/:id', usuarioController_js_1.putUsuario);
router.delete('/:id', usuarioController_js_1.deleteUsuario);
exports.default = router;
