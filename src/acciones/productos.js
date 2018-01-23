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