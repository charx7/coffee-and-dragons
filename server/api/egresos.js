// Rutas de la API de los usuarios
const express = require('express');
const router  = express.Router();

// Importamos el esquema de usuarios que necesitaremos
const modeloEgresos = require('../modelos/esquemaEgresos');

// Api REST de GET ALL
router.get('/egresos', (request, response) => {
    // Query a la BDD para mostrar todos los egresos
    modeloEgresos.find((error, respuestaAlQuery) =>{
        if(error) {
            console.log('Error al obtener los Egresos de la BDD.')
            response.send(error);
        } else {
            console.log('Se sustrayeron todos los egresos guardados')
            return response.send(JSON.stringify(respuestaAlQuery));
        }
    });
});

// POST de crear un nuevo egreso
router.post('/egresos', (req, res) => {
    console.log('Entra a crear un egreso nuevo a la BDD');
    // Creamos un nuevo objeto de Egreso
    let nuevoEgreso = new modeloEgresos(req.body);
    // Mandamos un query de create a la BDD
    modeloEgresos.create(nuevoEgreso, (error, resultadoQuery) => {
        if(!error) {
            console.log('Exito guardando producto');
            // Si no recibimos error entonces mandamos el Egreso creado como respuesta
            return res.send(JSON.stringify(resultadoQuery));
        } else {
            // De otro modo mandamos el error
            return res.send(JSON.stringify({ error: error }));
        }
    });
});

// Show de un solo elemento de egresos
router.get('/egresos/:id', (req, res) => {
    console.log('Entro a hacer un query de un solo elemento de egresos', req.params);
    let idActual = req.params.id;
    modeloEgresos.findById(idActual, (error, resultadoQuery) => {
        if(!error) {
            console.log('Producto Econtrado', resultadoQuery);
            return res.send(JSON.stringify(resultadoQuery));
        }
        else console.log('Error', error);
    });
});

// Exportaciones de la ruta
module.exports= router;
