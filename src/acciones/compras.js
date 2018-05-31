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
    }
};

// Accion de aniadir un egreso con valores de decontruccion default
export const agregarCompra = (compraToAgregar) => ({
    type: 'AGREGA_COMPRA',
    compra: compraToAgregar
});
