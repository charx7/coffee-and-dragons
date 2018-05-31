import axios from 'axios';

// Query de Todos las compras para guardarlas en el almacen
export const empiezaAgregarCompras = () => {
    return (dispatch) => {
        // Hacemos un query a la BDD de MONGO que jala todos los egresos registrados
        return axios.get('/api/compras')
            .then( (respuesta) => {
                console.log('Las compras guardados en la BDD son: ',respuesta.data);
                respuesta.data.map ((elemento) => {
                    dispatch(agregarCompra(elemento));
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

// Accion de aniadir un egreso con valores de decontruccion default
export const agregarCompra = (compraToAgregar) => ({
    type: 'AGREGA_COMPRA',
    compra: compraToAgregar
});

// Para hacer un Create a la BDD de Mongo
export const empiezaNuevaCompra = (compraToAgregar) => {
    return(dispatch) => {
        console.log('Entro a agregar una compra a la BDD ', compraToAgregar);
        return axios.post('/api/compras', compraToAgregar)
            .then(res => {
                console.log('Se agrego una compra a la BDD', res);
                // Agrega la compra aniadido a la BDD al almacen de redux
                dispatch(agregarCompra(res.data));
            })
            .catch( err => {
                console.log('Error Agregando Compra', err);
            })
    };
};
