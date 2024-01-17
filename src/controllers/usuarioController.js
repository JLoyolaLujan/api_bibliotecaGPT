const Usuario = require("../models/usuarioModel");

exports.getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: "error al obtener usuarios" }); 
    }
}

exports.getUsuariosById = async (req, res) => {
    try {
        const id = req.params.id;
        const usuario = await Usuario.findById(id);
        if (!usuario) {
            return res.status(404).json({ error: "usuario no encontrado" });
        }
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({error: "error al obtener usuario"});
    }
}

exports.createUsuario = async (req, res) => {
    try {
        const nuevoUsuario = await Usuario.create(req.body);
        await nuevoUsuario.save();
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(500).json({ error: "error al crear usuario" });
    }
}

exports.updateUsuario = async (req, res) => {
    try {
        const id = req.params.id;
        const usuario  = await Usuario.findByIdAndUpdate(id, req.body, {new:true});

        if(!usuario) {
            return res.status(400).json({ error: "usuario no encontrado" });
        }

        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ error: "error al actualizar usuario" });
    }
}

exports.deleteUsuario = async (req, res) => {
    try {
        const id = req.params.id; 
        const usuario = await Usuario.findByIdAndRemove(id);
        res.status(200).json({ message: "usuario eliminado con exito" });
    } catch (error) {
        res.status(500).json({ error: "error al eliminar usuario" });
    }
}