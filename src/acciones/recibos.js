// Accion de aniadir un gasto con valores de decontruccion default
export const agregarRecibo = (reciboAAgregar) => ({
    type: 'AGREGA_RECIBO',
    recibo: reciboAAgregar
});

export const agregarProducto = (id, actualizaciones) => ({
    type: 'MODIFICA_RECIBO',
    id,
    actualizaciones 
});

export const modificaRecibo = (id, actualizaciones) => ({
    type: 'MODIFICA_RECIBO',
    id,
    actualizaciones 
});