// Importando el modulo de mongoose para que se pueda hacer el esquema
var mongoose = require("mongoose");

// Instalacion del Schema de la BDD
var esquemaVentas = new mongoose.Schema({
    precio: Number,
    descripcion: String,
    categoria: String,
    modoPago: String,
    comision: Number,
    fecha: Number,
    idProducto: String
});
// Compilando el modelo
var modeloVentas = mongoose.model("Venta", esquemaVentas);

// Exportamos el modelo del esquema para usarlos en app.js
module.exports = modeloVentas;