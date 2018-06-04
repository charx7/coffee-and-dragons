// Importando el modulo de mongoose para que se pueda hacer el esquema
var mongoose = require("mongoose");

// Instalacion del Schema de la BDD
var esquemaArqueos = new mongoose.Schema({
    fecha:       Number,
    denom500:    Number,
    denom200:    Number,
    denom100:    Number,
    denom50:     Number,
    denom20:     Number,
    denom10:     Number,
    denom5:      Number,
    denom2:      Number,
    denom1:      Number,
    denomPunto5: Number
});

// Compilando el modelo
var modeloArqueos = mongoose.model("Arqueo", esquemaArqueos);

// Exportamos el modelo del esquema para usarlos en app.js
module.exports = modeloArqueos;
