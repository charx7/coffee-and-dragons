// Importaciones
const express           = require('express');
const passport          = require('passport');
const modeloUsuarios    = require('../modelos/esquemaUsuarios');

// Inicializacion del routeador de express para exportalo al servidor
const router = express.Router();

// Definicion de la ruta de POST /registro
router.post('/registro', (req, res) => {
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
});

// Definiciones de la ruta POST de /login
router.post('/login', (req, res) => {
    // Llamamos al metodo local de passport para autenticar
    passport.authenticate('local')(req, res, () => {
        //console.log('datos del req', req.user)
        // Si hay exito en el logeo mandar la info del usuario que esta en el request.user
        if(req.user) {
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