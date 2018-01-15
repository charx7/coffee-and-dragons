// Importando el modulo de mongoose para que se pueda hacer el esquema
var mongoose = require("mongoose");

// Instalacion del Schema de la BDD
var esquemaProductos = new mongoose.Schema({
    precio: Number,
    descripcion: String,
    imagen: String,
    categoria: String
});
// Compilando el modelo
var productos = mongoose.model("Producto", esquemaProductos);

// Exportamos el modelo del esquema para usarlos en app.js
module.exports = productos;