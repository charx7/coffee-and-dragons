// Importaciones
const express           = require('express');
const mongoose          = require('mongoose');
const passport          = require('passport');
const modeloUsuarios    = require('../modelos/esquemaUsuarios');

// Inicializacion del routeador de express para exportalo al servidor
const router = express.Router();

// Configuracion de las promesas de mongoose para usar las globales
mongoose.Promise = global.Promise;

// Definicion de la ruta GET para verificarlasesion
router.get('/verificasesion', (req, res) => {
    // Verificamos si hay un usuario con sesion activa de 'express-session' esto le aniade un objeto de user
    // a todas las request para la duracion de la sesion usando un cookie del navegador
    if(req.user) {
        return res.send(JSON.stringify(req.user));
    } else {
        return res.send(JSON.stringify({}));
    }
});

// Definicion de la ruta de POST /registro
router.post('/registro', (req, res) => {
    // Primero verificamos que el email de usuario ya exista en la BDD
    modeloUsuarios.findOne({ email: req.body.email }, (err, respuestaQuery) =>{
        if(err) {
            return res.send(JSON.stringify({ error: err }));
        } else {
            console.log('Respuesta fue: ', respuestaQuery);
            if(!respuestaQuery) {
                // Crea un nuevo objeto de usuario para guardar usando valores del JSON que recibiremos
                const nuevoUsuario = new modeloUsuarios(req.body);    
                // Guardamos el usuario via passport para que hashee el password
                modeloUsuarios.register(nuevoUsuario, req.body.password, (err, respuestaQuery) => {
                    // Si hay un error regresa un JSON con el error
                    if(err) {
                        return res.send(JSON.stringify({ error: err }));
                    } else {
                        // Si no hay error entonces mandamos un JSON con la info del usuario
                        return res.send(JSON.stringify(respuestaQuery));
                    }
                });
            } else {
                return res.send(JSON.stringify({ error: 'Email que quiere registrar ya existe en la BDD'}));
            }
        }
    });
});

// Definiciones de la ruta POST de /login
router.post('/login', async (req, res) => {
    // Verificar a un usuario por su email en la BDD
    const query = modeloUsuarios.findOne({ 
        email: req.body.email
    });

    // Una vez que tengamos el resultado del query devolvemos su nombre de usuario
    // para asi poder procesar el login con passport
    const usuarioEncontrado = await query.exec();
    // Si existen tendran un nombre de Usuario asi que lo aniadimos al cuerpo del request
    if(usuarioEncontrado) { req.body.username = usuarioEncontrado.username; }

    // Llamamos al metodo local de passport para autenticar
    passport.authenticate('local')(req, res, () => {
        //console.log('datos del req', req.user)
        // Si hay exito en el logeo mandar la info del usuario que esta en el request.user
        if(req.user) {
            console.log('Exito al logearte!');
            return res.send(JSON.stringify(req.user));
        } else {
            // Respondemos con un error
            return res.send(JSON.stringify({ error: 'Error al logearte' }));
        }
    });
});

// Definiciones de la ruta de GET de /logout
router.get('/logout', (req, res) => {
    // Deslogeamos con el metodo logOut()
    req.logOut();
    // Mandamos el objeto de usuario que ahora debe de ser NULL
    return res.send(JSON.stringify(req.user));
});

// Exportaciones de las rutas
module.exports = router;