const express = require("express");
const router = express.Router();

const { getAllUsuarios, getUsuariosById, createUsuario, updateUsuario, deleteUsuario } = require("../controllers/usuarioController");

// Importamos la libreria para validar scopes
const { requiredScopes } = require("express-oauth2-jwt-bearer");

router.get("/", requiredScopes("read:usuarios"), getAllUsuarios);
router.get("/:id", requiredScopes("read:usuarios"), getUsuariosById);
router.post("/", requiredScopes("write:usuarios"), createUsuario);
router.put("/:id", requiredScopes("write:usuarios"), updateUsuario);
router.delete("/:id", requiredScopes("write:usuarios"), deleteUsuario);

module.exports = router;