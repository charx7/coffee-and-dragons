// Acciones que se van a dispatchear desde el reductor de ventas
export const agregarVenta = (ventaAAgregar) => ({
    type: 'AGREGA_VENTA',
    venta: ventaAAgregar
})

export const editarVenta = (ventaAEditar) => ({
    type: 'EDITAR_VENTA',
    venta: ventaAEditar
})

// Esta es la unica accion que usamos por ahora
export const mostrarVenta = (ventaAMostrar) => ({
    type: 'MOSTRAR_VENTA',
    venta: ventaAMostrar
})