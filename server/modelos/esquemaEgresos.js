// Importando el modulo de mongoose para que se pueda hacer el esquema
var mongoose = require("mongoose");

// Instalacion del Schema de la BDD
var esquemaEgresos = new mongoose.Schema({
    precio:             Number,
    descripcion:        String,
    imagen:             String,
    iva:                Number,
    tipoEgreso:         String,
    proveedor:          String,
    unidadPresentacion: String,
    usoDestino:         String
});
// Compilando el modelo
var egresos = mongoose.model("Egreso", esquemaEgresos);

// Exportamos el modelo del esquema para usarlos en app.js
module.exports = egresos;