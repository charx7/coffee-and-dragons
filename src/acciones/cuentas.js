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

// Accion para eliminar/cancelar una cuenta del almacen
export const eliminarCuenta = (id) => ({
    type: 'ELIMINAR_CUENTA',
    id
});

// Accion que modifica los ids de las cuentas existentes para reconstruid el arreglo
export const modificaIndicesCuentas = () => ({
    type: 'MODIFICA_INDICES'
}) 

// Accion que modifica el nombre de la cuenta activa
export const modificaNombreCuenta = (id, nombreAModificar) => ({
    type: 'MODIFICA_NOMBRES',
    id,
    nombreAModificar
})