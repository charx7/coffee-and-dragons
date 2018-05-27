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
        default: 
        return estado;
    }
};

export default reductorEgresos;