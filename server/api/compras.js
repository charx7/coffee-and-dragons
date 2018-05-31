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

// Exportaciones del modulo
module.exports = router;
