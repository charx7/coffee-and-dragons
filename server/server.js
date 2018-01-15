// Importamos path
const path =  require('path');
// Imporamos express
const express = require('express');
// Iniciamos una instacia de express
const app = express();
// Establecemos el path de la app le decimos que en el directorio publico se encuentran todos nuestros assets
const publicPath = path.join(__dirname, '..', 'public');
// Para establecer que puerto va a correr nuestra app
const puertoEnv = process.env.PORT || 3000;

// ################################################
// Importaciones del body parser para parsear los posts methods y le decimos a express que la use
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

// Aniadimos la importacion de Mongoose
var mongoose = require("mongoose");
// Conectando a la BDD desde localhost (necesita estar el demonio corriendo y creando la BDD
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// Conexion a la BDD segun si es prod o dev
if(process.env.NODE_ENV == 'development') {
    console.log('Entro como development');
    mongoose.connect("mongodb://localhost/coffee_and_dragons_app");
} else {
    console.log('entro como deploy');
    mongoose.connect("mongodb://charx:rusty@ds255797.mlab.com:55797/coffee-and-dragons");
}
// Importando los requerimientos de esquemas de la BDD
var productos = require("./modelos/esquemaProductos");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// productos.create({
//     precio: 100,
//     descripcion: 'aniadido desde app.js',
//     imagen: 'linda url',
//     categoria: 'cafeteria'
// }, (error, resultado) => {
//     if(error) {
//         console.log('Error anadiendo producto')
//     } else {
//         console.log('Exito anadiendo ', resultado)
//     }
// });
app.get('/api/productos/', (req, res) => {
    // Saca todos los productos de la BDD
    productos.find({}, (error, resultadoQuery) => {
        if(error) {
            console.log('No se pudieron obtener los productos');
            console.log(error);
        } else {
            console.log('Entro a pedir productos');
            res.json(resultadoQuery);
        }
    });
});

// ##################################################
// Esto es lo que hace que sea estatico o no
if(process.env.NODE_ENV == 'development'){
    console.log('Estamos sirviendo como api')
} else {
    app.use(express.static(publicPath));
}
// Establecemos una ruta unica para que todas renderen la misma pagina de React que se encarga del ruteo de
// manera local
app.get('/', (request, response) => {
    console.log(process.env.NODE_ENV);
    if(process.env.NODE_ENV == 'development') {
        response.send('Sirviendo API');
        console.log('Sirviendo API');
    }   else {
        console.log('Sirviendo App')
        response.sendFile(path.join(publicPath, 'index.html'));
    }
});

// Inicializamos el servidor en el puerto 3000
app.listen(puertoEnv, () => {
    console.log('Servidor corriendo en ' + puertoEnv);
});