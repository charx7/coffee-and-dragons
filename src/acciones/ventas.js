import axios from 'axios';

// Query de Todos las ventas para guardarlas en el almacen
export const empiezaAgregarVentas = () => {
    return (dispatch) => {
        // Hacemos un query a la BDD de MONGO que jala todos los egresos registrados
        return axios.get('/api/ventas')
            .then((respuesta) => {
                console.log('Las ventas guardados en la BDD son: ',respuesta.data);
                respuesta.data.map ((elemento) => {
                    dispatch(agregarVenta(elemento));
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

// Para hacer un DELETE a la BDd de Mongo
export const empiezaEliminarVenta = (idEliminar) => {
    return(dispatch) => {
        console.log('Entro a eliminar la venta con el id: ', idEliminar);
        return axios.delete('/api/ventas/' + idEliminar)
        .then(res => {
            console.log('Se esta eliminando la venta: ', idEliminar);
            console.log('Respuesta del servidor: ', res);
            // Call de dispatch para eliminar registro del almacen
            dispatch(eliminarVenta(res.data._id));
        })
        .catch(err => {
            console.log('Hubo un error: ', err);
        });
    }
}

export const eliminarVenta = (idEliminar) => ({
    type: 'ELIMINAR_VENTA',
    idEliminar
});


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
