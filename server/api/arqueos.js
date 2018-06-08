// Rutas API de Compras
const express = require('express');
const router  = express.Router();

// Importacion del modelo que vamos a usar en la API
const modeloArqueos = require('../modelos/esquemaArqueos');

// Api REST de GET ALL
router.get('/arqueos', (request, response) => {
    // Query a la BDD para mostrar todos los egresos
    modeloArqueos.find((error, respuestaAlQuery) => {
        if(error) {
            console.log('Error al obtener los Arqueos de la BDD.')
            response.send(error);
        } else {
            console.log('Se sustrayeron todos los Arqueos guardados')
            return response.send(JSON.stringify(respuestaAlQuery));
        }
    });
});

// Show de un solo elemento de compras
router.get('/arqueos/:id', (req, res) => {
    console.log('Entro a hacer un query de un solo elemento de arqueos', req.params);
    let idActual = req.params.id;
    modeloArqueos.findById(idActual, (error, resultadoQuery) => {
        if(!error) {
            console.log('Arqueo Econtrado', resultadoQuery);
            return res.send(JSON.stringify(resultadoQuery));
        }
        else console.log('Error', error);
    });
});

// POST de crear un nuevo egreso
router.post('/arqueos', (req, res) => {
    console.log('Entra a crear un nuevo arqueo BDD');
    // Creamos un nuevo objeto de Compra
    let nuevaCompra = new modeloArqueos(req.body);
    // Mandamos un query de create a la BDD
    modeloArqueos.create(nuevaCompra, (error, resultadoQuery) => {
        if(!error) {
            console.log('Exito guardando el arqueo');
            // Si no recibimos error entonces mandamos el Egreso creado como respuesta
            return res.send(JSON.stringify(resultadoQuery));
        } else {
            // De otro modo mandamos el error
            return res.send(JSON.stringify({ error: error }));
        }
    });
});

// DELETE de un elemento especifico de la BDD
router.delete('/arqueos/:id', (req, res) => {
    console.log('Entro a borrar un registro de arqueso ', req.params);
    modeloArqueos.findByIdAndRemove(req.params.id, (error, resultadoQuery) => {
        if(!error){
            console.log('Arqueo Eliminado', resultadoQuery);
            res.json(resultadoQuery);  
        } 
        else console.log('Error ', error);
    });
});

// Exportaciones del modulo
module.exports = router;
