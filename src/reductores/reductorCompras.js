// Reductor de Compras

// Estado default del reductor
const reductorComprasDefault = [];

// Definicion de la funcion de Reductor
const reductorCompras = (estado = reductorComprasDefault, accion) => {
    switch (accion.type) {
        case 'AGREGA_COMPRA':
            return [
                // Otro operador para concatenar de otro manera con ...elementos, elemento a aniadir
                ...estado,
                accion.compra
            ];
        case 'EDITAR_COMPRA':
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
        case 'ELIMINAR_COMPRA':
            console.log('Id a elminar de la accion es: ', accion.idEliminar)
            return estado.filter(({ _id }) => {
                return _id != accion.idEliminar;
            });
        default: 
        return estado;
    }
};

export default reductorCompras;
