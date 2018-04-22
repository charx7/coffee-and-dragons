// Rutas de la API de los usuarios
const express = require('express');
const router  = express.Router();

// Importamos el esquema de usuarios que necesitaremos
const modeloUsuario = require('../modelos/esquemaUsuarios');

router.get('/lista', (request, response, next) => {
    modeloUsuario.find((error, respuestaAlQuery) =>{
        if(error) {
            response.send(error);
        } else {
            response.json(respuestaAlQuery);
        }
    });
});

// Exportaciones de la ruta
module.exports= router;