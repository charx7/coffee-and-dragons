const estadoInicial = {
    nombre: 'anonimo',
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
        case 'INTENTO_LOGEO_FALLIDO': {
            const nuevoEstado = {
                nombre: 'anonimo',
                id: '',
                estaLogeado: false,
                estaLogeando: false,
                apellido: '',
                username: ''
            };
            return nuevoEstado;
        }
        case 'INTENTO_LOGEO_EXITO': {
            const nuevoEstado        = Object.assign({}, estado);
            nuevoEstado.nombre       = accion.json.nombre;
            nuevoEstado.id           = accion.json._id;
            nuevoEstado.estaLogeado  = true;
            nuevoEstado.estaLogeando = false;
            nuevoEstado.apellido     = accion.json.apellido;
            nuevoEstado.username     = accion.json.username;
            return nuevoEstado;
        }
        default: {
            return estado;
        }
    }
};

export default reductorAuthentication;
