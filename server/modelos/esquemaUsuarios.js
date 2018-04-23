// Importando el modulo de mongoose para que se pueda hacer el esquema
var mongoose                = require("mongoose");
// Importaciones para modelo de usuarios de passport
var passportLocalMongoose   = require('passport-local-mongoose');

// Instalacion del Schema de la BDD
var esquemaUsuarios = new mongoose.Schema({
    username: String,
    // Para que asi no devuelva los password a la API que les hara Query
    password: { type: String, select: false },
    nombre: String,
    apellido: String,
    email: String,
    esAdmin: Boolean 
});

// Plugin de passport
esquemaUsuarios.plugin(passportLocalMongoose); 

// Compilando el modelo
var modeloUsuarios = mongoose.model("Usuario", esquemaUsuarios);

// Exportamos el modelo del esquema para usarlos en app.js
module.exports = modeloUsuarios;