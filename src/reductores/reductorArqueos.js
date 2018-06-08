// Reductor de Compras

// Estado default del reductor
const reductorArqueosDefault = [];

// Definicion de la funcion de Reductor
const reductorArqueos = (estado = reductorArqueosDefault, accion) => {
    switch (accion.type) {
        case 'AGREGA_ARQUEO':
            return [
                // Otro operador para concatenar de otro manera con ...elementos, elemento a aniadir
                ...estado,
                accion.compra
            ];
        case 'EDITAR_ARQUEO':
            return estado.map((elemento) => {
                if(elemento._id == accion.id) {
                    return {
                        ...elemento,
                        ...accion.actualizaciones
                    };
                } else {
                    return elemento;
                }
            });
        case 'ELIMINAR_ARQUEO':
            console.log('Id a elminar de la accion es: ', accion.idEliminar)
            return estado.filter(({ _id }) => {
                return _id != accion.idEliminar;
            });
        default: 
        return estado;
    }
};

export default reductorArqueos;
