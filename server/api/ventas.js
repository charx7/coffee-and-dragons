// Rutas API de Compras
const express = require('express');
const router  = express.Router();

// Importacion del modelo que vamos a usar en la API
const modeloVentas = require('../modelos/esquemaVentas');

// API de VENTAS
// GET ALL
router.get('/ventas/', (req, res) => {
    // Query a la BDD de todas las ventas
    modeloVentas.find({}, (error, resultadoQuery) => {
        if(error) {
            console.log('Error obteniendo los datos', error);
        } else {
            console.log('Se sustrayeron los datos de todas las ventas');
            res.json(resultadoQuery);
        }
    });
});

// Show de un solo elemento de ventas
router.get('/ventas/:id', (req, res) => {
    console.log('Entro a hacer un query de un solo elemento de ventas ', req.params);
    let idActual = req.params.id;
    modeloVentas.findById(idActual, (error, resultadoQuery) => {
        if(!error) {
            console.log('Venta Econtrada', resultadoQuery);
            return res.send(JSON.stringify(resultadoQuery));
        }
        else console.log('Error', error);
    });
});

// POST
router.post('/ventas/', (req, res) => {
    console.log('Entro a postear una venta a la BDD');
    console.log('El cuerpo del post es: ',req.body);
    var nuevaVenta = {
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        categoria: req.body.categoria,
        modoPago: req.body.modoPago,
        comision: req.body.comision,
        fecha: req.body.fecha,
        idProducto: req.body.idProducto
    }
    modeloVentas.create(nuevaVenta, (error, resultadoQuery) => {
        if(!error){
            console.log('Venta Guardada');
            return res.send(JSON.stringify(resultadoQuery));
        } 
        else console.log('Error ', error);
    });
});

// DELETE
router.delete('/ventas/:id', (req, res) => {
    console.log('Entro a borrar un registro de ventas', req.params);
    modeloVentas.findByIdAndRemove(req.params.id, (error, resultadoQuery) => {
        if(!error) {
            console.log('Venta Eliminada', resultadoQuery);
            res.json(resultadoQuery); 
        }
        else console.log('Error ', error);
    });
});

module.exports = router;
