// Accion de aniadir un gasto con valores de decontruccion default
export const agregarCuenta = (cuentaAAgregar) => ({
    type: 'AGREGA_CUENTA',
    cuenta: cuentaAAgregar
});

// Accion que define que hace el reductor cuando se quiere activar una mesa
export const activaCuenta = (id, cuentaAActivar) => ({
    type: 'ACTIVA_CUENTA' ,
    id,
    cuentaAActivar
});

// Accion que quita la propiedad de activa a las otras mesas
export const desActivaCuenta = (id, cuentaADesactivar) => ({
    type: 'DESACTIVA_CUENTA',
    id,
    cuentaADesactivar
});