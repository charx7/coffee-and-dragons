// Importamos path
const path          =  require('path');
// Imporamos express
const express       = require('express');
// Importaciones para el modulo de seguridad
const passport      = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Iniciamos una instacia de express
const app = express();
// Establecemos el path de la app le decimos que en el directorio publico se encuentran todos nuestros assets
const publicPath = path.join(__dirname, '..', 'public');
// Para establecer que puerto va a correr nuestra app
const puertoEnv = process.env.PORT || 3000;

// ################################################
// Importaciones del body parser para parsear los posts methods y le decimos a express que la use
var bodyParser = require("body-parser");
//app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); // Para que acepte los JSON

// Aniadimos la importacion de express que nos permitira hacer uso de sesiones con Passport
app.use(require('express-session')({
    secret: 'clave super secreta para decodificar sesiones',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

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
var modeloVentas = require("./modelos/esquemaVentas");

// Para el uso de CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
// productos.create({
//     precio: 20,
//     descripcion: 'aniadido desde app.js 4',
//     imagen: 'http://www.pizzaspiccolo.com.co/wp-content/uploads/2016/02/Malteadas-prod.jpg',
//     categoria: 'cafeteria'
// }, (error, resultado) => {
//     if(error) {
//         console.log('Error anadiendo producto', error);
//     } else {
//         console.log('Exito anadiendo ', resultado);
//     }
// });
// modeloVentas.create({
//     precio: 50,
//     descripcion: 'Producto Ejemplo 3',
//     categoria: 'cafeteria',
//     modoPago: 'efectivo',
//     comision: 0,
//     fecha: 0
// }, (error, resultadoQuery) => {
//     if(error) {
//         console.log('Error anadiendo venta', error);
//     } else {
//         console.log('Exito anadiendo ', resultadoQuery);
//     }
// });

// IMPORTANTE !!!!!!!!!!!!!!!!!!!!!!!
// ##################################
// Routeador de la API de usuarios (importacion)
const usuarios      = require('./api/usuarios');
const autenticacion = require('./api/authentication');  
// Uso del Routeador
app.use('/api/usuarios', usuarios);
app.use('/api/autenticacion', autenticacion);
// ###################################


// API de VENTAS
// GET ALL
app.get('/api/ventas/', (req, res) => {
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

// POST
app.post('/api/ventas/', (req, res) => {
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
        if(!error) console.log('Venta Guardada');
        else console.log('Error ', error);
    });
    res.send('done');
});

// DELETE
app.delete('/api/ventas/:id', (req, res) => {
    console.log('Entro a borrar un registro de ventas', req.params);
    modeloVentas.findByIdAndRemove(req.params.id, (error, resultadoQuery) => {
        if(!error) console.log('Venta Eliminada', resultadoQuery);
        else console.log('Error ', error);
    });
    res.send('done');
});

// ##############################################
// API DE PRODUCTOS
// ##############################################

// GET
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

// POST DE CREAR UN NUEVO PRODUCTO
app.post('/api/productos/', (req, res) => {
    console.log('Entro a postear un producto a la BDD');
    console.log('El cuerpo del post es: ',req.body);
    var nuevoProducto = {
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        imagen: req.body.imagen,
        categoria: req.body.categoria
    }
    productos.create(nuevoProducto, (error, resultadoQuery) => {
        if(!error) {
            res.json(resultadoQuery)
            console.log('Producto Guardado', resultadoQuery);
        }
        else console.log('Error ', error);
    });
    
    //res.send('done');
});

// SHOW un solo elemento de productos
app.get('/api/productos/:id', (req, res) => {
    console.log('Entro a hacer un query de un solo elemento de productos', req.params);
    var idActual = req.params.id;
    productos.findById(idActual, (error, resultadoQuery) => {
        if(!error) {
            console.log('Producto Econtrado', resultadoQuery);
            res.json(resultadoQuery);
        }
        else console.log('Error', error);
    });
});

// EDIT ruta para editar un producto
app.put('/api/productos/:id', (req, res) => {
    console.log('Entro a editar un producto de la BDD', req.params.id);
    console.log('Informacion nueva: ', req.body)
    var actualizacionesAplicar = req.body;
    var idActual = req.params.id;
    productos.findByIdAndUpdate( idActual, actualizacionesAplicar, (error, resultadoQuery) => {
        if(!error) {
            console.log('Exito editando el registro', resultadoQuery);
            res.json(resultadoQuery);
        } else {
            console.log('Error Editando')
        }
    });  
});

// DELETE de un elemento especifico de la BDD
app.delete('/api/productos/:id', (req, res) => {
    console.log('Entro a borrar un registro de productos', req.params);
    productos.findByIdAndRemove(req.params.id, (error, resultadoQuery) => {
        if(!error){
            console.log('Producto Eliminado', resultadoQuery);
            res.json(resultadoQuery);  
        } 
        else console.log('Error ', error);
    });
});

// Configuracion de Passport
const Usuario = require('./modelos/esquemaUsuarios');
passport.use(new LocalStrategy(Usuario.authenticate()));
passport.serializeUser(Usuario.serializeUser());
passport.deserializeUser(Usuario.deserializeUser());

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