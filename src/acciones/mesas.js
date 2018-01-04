// Accion de aniadir un gasto con valores de decontruccion default
export const agregarMesa = (mesaAAgregar) => ({
    type: 'AGREGA_MESA',
    mesa: mesaAAgregar
});

// Accion que define que hace el reductor cuando se quiere activar una mesa
export const activaMesa = (id, mesaAActivar) => ({
    type: 'ACTIVA_MESA' ,
    id,
    mesaAActivar
});

// Accion que quita la propiedad de activa a las otras mesas
export const desActivaMesa = (id, mesaADesactivar) => ({
    type: 'DESACTIVA_MESA',
    id,
    mesaADesactivar
});