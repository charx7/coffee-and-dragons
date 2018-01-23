// Reductor de los recibos (estados temporales de las cuentas hasta que se liquide la cuenta)
// Definimos un estado default para probar
const reductorRecibosDefault = [
    {
        id: 1,
        mesa: 1,
        modoPago: 'efectivo',
        fecha: 0,
        idProductos: [],
        comision: 0,
        monto: 0
    },
    {
        id: 2,
        mesa: 1,
        modoPago: 'tarjeta',
        fecha: 0,
        idProductos: [],
        comision: 0,
        monto: 0
    },
    {
        id: 3,
        mesa: 1,
        modoPago: 'efectivo',
        fecha: 0,
        idProductos: [],
        comision: 0,
        monto: 0
    },
    {
        id: 4,
        mesa: 1,
        modoPago: 'efectivo',
        fecha: 0,
        idProductos: [],
        comision: 0,
        monto: 0
    }
]

// Definicion del reductor
const reductorRecibos = (estado = reductorRecibosDefault, accion) => {
    switch (accion.type) {
        case 'AGREGA_RECIBO':
            return [
                // Sumamos todos los demas elementos que ya estaban en el arreglo
                ...estado,
                accion.recibo
            ];
        case 'MODIFICA_RECIBO':
            return estado.map((elemento) => {
                if(elemento.id === accion.id) {
                    return {
                        ...elemento,
                        ...accion.actualizaciones
                    }
                } else {
                    return elemento;
                }
            });
        default:
            return estado;
    }
};

export default reductorRecibos;