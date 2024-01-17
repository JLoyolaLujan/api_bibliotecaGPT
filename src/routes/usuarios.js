const express = require("express");
const router = express.Router();

const { getAllUsuarios, getUsuariosById, createUsuario, updateUsuario, deleteUsuario } = require("../controllers/usuarioController");

router.get("/", getAllUsuarios);
router.get("/:id", getUsuariosById);
router.post("/", createUsuario);
router.put("/:id", updateUsuario);
router.delete("/:id", deleteUsuario);

module.exports = router;