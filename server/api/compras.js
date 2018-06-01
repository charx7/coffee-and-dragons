// Rutas API de Compras
const express = require('express');
const router  = express.Router();

// Importacion del modelo que vamos a usar en la API
const modeloCompras = require('../modelos/esquemaCompras');

// Api REST de GET ALL
router.get('/compras', (request, response) => {
    // Query a la BDD para mostrar todos los egresos
    modeloCompras.find((error, respuestaAlQuery) => {
        if(error) {
            console.log('Error al obtener las Compras de la BDD.')
            response.send(error);
        } else {
            console.log('Se sustrayeron todas las compras guardados')
            return response.send(JSON.stringify(respuestaAlQuery));
        }
    });
});

// Show de un solo elemento de compras
router.get('/compras/:id', (req, res) => {
    console.log('Entro a hacer un query de un solo elemento de compras', req.params);
    let idActual = req.params.id;
    modeloCompras.findById(idActual, (error, resultadoQuery) => {
        if(!error) {
            console.log('Compra Econtrada', resultadoQuery);
            return res.send(JSON.stringify(resultadoQuery));
        }
        else console.log('Error', error);
    });
});

// POST de crear un nuevo egreso
router.post('/compras', (req, res) => {
    console.log('Entra a crear una compra nueVa la BDD');
    // Creamos un nuevo objeto de Compra
    let nuevaCompra = new modeloCompras(req.body);
    // Mandamos un query de create a la BDD
    modeloCompras.create(nuevaCompra, (error, resultadoQuery) => {
        if(!error) {
            console.log('Exito guardando compra');
            // Si no recibimos error entonces mandamos el Egreso creado como respuesta
            return res.send(JSON.stringify(resultadoQuery));
        } else {
            // De otro modo mandamos el error
            return res.send(JSON.stringify({ error: error }));
        }
    });
});

// DELETE de un elemento especifico de la BDD
router.delete('/compras/:id', (req, res) => {
    console.log('Entro a borrar un registro de compras ', req.params);
    modeloCompras.findByIdAndRemove(req.params.id, (error, resultadoQuery) => {
        if(!error){
            console.log('Compra Eliminada', resultadoQuery);
            res.json(resultadoQuery);  
        } 
        else console.log('Error ', error);
    });
});

// Exportaciones del modulo
module.exports = router;
