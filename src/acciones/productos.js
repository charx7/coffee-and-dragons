import axios from 'axios';

// Accion de aniadir un producto con valores de decontruccion default
export const agregarProducto = (productoAAgregar) => ({
    type: 'AGREGA_PRODUCTO',
    producto: productoAAgregar
});

export const empiezaAgregarProducto = () => {
    return (dispatch) => {
        // Hacemos un query a la BDD de MONGO
        return axios.get('/api/productos')
            .then( (respuesta) => {
                console.log(respuesta.data);
                respuesta.data.map ((elemento) => {
                    dispatch(agregarProducto(elemento));
                });
            })
            .catch( (error) => {
                console.log(error);
            });
    }
};

// Accion Editar un producto
export const editarProducto = (id, actualizaciones) => ({
    type: 'EDITAR_PRODUCTO',
    id,
    actualizaciones
});

// Codigo para que haga un edit a la BDD de Mongo
export const empiezaEditarProducto = (id, actualizaciones) => {
    return (dispatch) => {
        console.log('entro a editar', id);
        return axios.put(`/api/productos/${id}`, actualizaciones)
            .then( (respuesta) => {
                console.log(respuesta.data);
                dispatch(editarProducto(id, actualizaciones));
            })
            .catch( (error) => {
                console.log(error);
            });  
        }
};

export const empiezaNuevoProducto = (productoAAgregar) => {
    return(dispatch) => {
        console.log('Entro a agregar un producto a la BDD',productoAAgregar);
        return axios.post('/api/productos', productoAAgregar)
            .then(res => {
                console.log('Se agrego un producto a la BDD', res);
                // Agrega el producto aniadido a la BDD al almacen de redux
                dispatch(agregarProducto(res.data));
            })
            .catch( err => {
                console.log('Error Agregando Producto', err);
            })
    }
}