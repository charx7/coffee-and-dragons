// Accion de aniadir un producto con valores de decontruccion default
export const agregarProducto = (productoAAgregar) => ({
    type: 'AGREGA_PRODUCTO',
    producto: productoAAgregar
});