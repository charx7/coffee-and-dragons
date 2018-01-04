// Reducer de los gastos
// Definimos el estado default del estado
const reductorMesasDefault = [{id: 1, activa: true},
                              {id: 2, activa: false},
                              {id: 3, activa: false},
                              {id: 4, activa: false}];
// Definimos el reductor como una funcion pura
const reductorMesas = (estado = reductorMesasDefault, accion) => {
    switch (accion.type){
        case 'AGREGA_MESA':
            return [
                // Otro operador para concatenar de otro manera con ...elementos, elemento a aniadir
                ...estado,
                accion.mesa
            ];
        case 'ACTIVA_MESA':
            console.log('Activando la mesa: ',accion.id, 'actualizacion: ', accion.mesaAActivar)
            // Activa la mesa en el redux
            return estado.map((elemento) => {
                if(elemento.id === accion.id) {
                    return{
                        ...elemento,
                        ...accion.mesaAActivar
                    }
                } else {
                    return {
                        ...elemento,
                        ...elemento.activa = false
                    };
                }
            });
        case 'DESACTIVA_MESA':
            console.log('Activando la mesa: ',accion.id, 'actualizacion: ', accion.mesaADesactivar)
            // Activa la mesa en el redux
            return estado.map((elemento) => {
                if(elemento.id === accion.id) {
                    return{
                        ...elemento,
                        ...accion.mesaADesactivar
                    }
                } else {
                    return elemento;
                }
            });
        default: 
            return estado; 
    }
};

// Definimos el export del archivo
export default reductorMesas;