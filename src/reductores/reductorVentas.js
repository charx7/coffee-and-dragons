// Reducer de las ventas
// Definimos el estado default del estado
const reductorVentasDefault = [];

const reductorVentas = (estado = reductorVentasDefault, accion) => {
    switch (accion.type){
        case 'AGREGA_VENTA':
            return[
                ...estado,
                accion.venta
            ]
        case 'EDITAR_VENTA':
            return estado.map((elemento)=>{
                if(elemento.id === accion.id) {
                    return{
                        ...elemento,
                        ...accion.actualizaciones
                    };
                    } else {
                        return{
                            ...elemento
                        };
                    }
            })
        case 'MOSTRAR_VENTA':
            return [{ ...accion.venta }]
        default: 
            return estado;
    }
}

export default reductorVentas;