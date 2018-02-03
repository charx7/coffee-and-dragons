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

// Para eliminar el recibo
export const eliminaRecibo =  (id) => ({
    type: 'ELIMINA_RECIBO',
    id
});

// Accion que modifica los ids de los recibos existentes para reconstruid el arreglo
export const modificaIndicesRecibos = () => ({
    type: 'MODIFICA_INDICES'
}) 