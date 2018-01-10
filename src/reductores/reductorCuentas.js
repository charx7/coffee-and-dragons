// Reducer de los gastos
// Definimos el estado default del estado
const reductorCuentasDefault = [{id: 1, activa: true},
                              {id: 2, activa: false},
                              {id: 3, activa: false},
                              {id: 4, activa: false}];
// Definimos el reductor como una funcion pura
const reductorCuentas = (estado = reductorCuentasDefault, accion) => {
    switch (accion.type){
        case 'AGREGA_CUENTA':
            return [
                // Otro operador para concatenar de otro manera con ...elementos, elemento a aniadir
                ...estado,
                accion.cuenta
            ];
        case 'ACTIVA_CUENTA':
            console.log('Activando la cuenta: ',accion.id, 'actualizacion: ', accion.cuentaAActivar)
            // Activa la mesa en el redux
            return estado.map((elemento) => {
                if(elemento.id === accion.id) {
                    return{
                        ...elemento,
                        ...accion.cuentaAActivar
                    }
                } else {
                    return {
                        ...elemento,
                        ...elemento.activa = false
                    };
                }
            });
        case 'DESACTIVA_CUENTA':
            console.log('Desactivando la cuenta: ',accion.id, 'actualizacion: ', accion.cuentaADesactivar)
            // Activa la mesa en el redux
            return estado.map((elemento) => {
                if(elemento.id === accion.id) {
                    return{
                        ...elemento,
                        ...accion.cuentaADesactivar
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
export default reductorCuentas;