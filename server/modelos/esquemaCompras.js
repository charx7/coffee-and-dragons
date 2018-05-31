// Importando el modulo de mongoose para que se pueda hacer el esquema
var mongoose = require("mongoose");

// Instalacion del Schema de la BDD
var esquemaCompras = new mongoose.Schema({
    precio: Number,
    descripcion: String,
    proveedor: String,
    modoPago: String,
    iva: Number,
    fecha: Number,
    idCompra: String,
    tipoEgreso: String,
    unidadPresentacion: String,
    usoDestino:         String
});
// Compilando el modelo
var modeloCompras = mongoose.model("Compra", esquemaCompras);

// Exportamos el modelo del esquema para usarlos en app.js
module.exports = modeloCompras;
