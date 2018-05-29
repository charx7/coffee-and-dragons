// Reductor de los Egresos

// Estado default del reductor
const reductorEgresosDefault = [];

// Definicion de la funcion de Reductor
const reductorEgresos = (estado = reductorEgresosDefault, accion) => {
    switch (accion.type) {
        case 'AGREGA_EGRESO':
            return [
                // Otro operador para concatenar de otro manera con ...elementos, elemento a aniadir
                ...estado,
                accion.egreso
            ];
        case 'EDITAR_EGRESO':
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
        case 'ELIMINAR_EGRESO':
            console.log('Id a elminar de la accion es: ', accion.idEliminar)
            return estado.filter(({ _id }) => {
                return _id != accion.idEliminar;
            });
        default: 
        return estado;
    }
};

export default reductorEgresos;