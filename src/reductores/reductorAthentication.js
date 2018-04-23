const estadoInicial = {
    nombre: 'Anonimo',
    id: '',
    estaLogeado: false,
    estaLogeando: false,
    apellido: '',
    username: ''
};

const reductorAuthentication = (estado = estadoInicial, accion) => {
    switch(accion.type) {
        /* eslint-disable */
        case 'INTENTO_LOGEO_AUTENTICACION': { 
            const nuevoEstado = Object.assign({}, estado);
            nuevoEstado.estaLogeando = true;
            return nuevoEstado;
        }
        /* eslint-enable */
        // case 'INTENTO_LOGEO_FALLIDO': {
        //     const nuevoEstado = {
        //         nombre: 'Anonimo',
        //         id: '',
        //         estaLogeado: false,
        //         estaLogeando: false,
        //         apellido: '',
        //         username: ''
        //     };
        //     return nuevoEstado;
        // }
        // Se ponen asi porque usan el mismo codigo que la de abajo!
        case 'INTENGO_LOGEO_FALLIDO':
        case 'FALLO_VERIFICAR_SESION': 
        case 'INTENTO_LOGOUT_EXITO': {
            console.log('Entro en el caso de logeo out');
            const nuevoEstado = Object.assign({}, estadoInicial);
            return nuevoEstado;
        }
        case 'INTENTO_LOGEO_EXITO': 
        case 'EXITO_VERIFICAR_SESION': {
            const nuevoEstado        = Object.assign({}, estado);
            nuevoEstado.nombre       = accion.json.nombre;
            nuevoEstado.id           = accion.json._id;
            nuevoEstado.estaLogeado  = true;
            nuevoEstado.estaLogeando = false;
            nuevoEstado.apellido     = accion.json.apellido;
            nuevoEstado.username     = accion.json.username;
            return nuevoEstado;
        }
        case 'INTENTO_LOGOUT_FALLIDO': {
            // Hacer un error handler
            return estado;
        }
        default: {
            return estado;
        }
    }
};

export default reductorAuthentication;
