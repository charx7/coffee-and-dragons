import axios from 'axios';

// Query de Todos los arqueos para guardarlas en el almacen
export const empiezaAgregarArqueos = () => {
    return (dispatch) => {
        // Hacemos un query a la BDD de MONGO que jala todos los egresos registrados
        return axios.get('/api/arqueos')
            .then((respuesta) => {
                console.log('Los arqueos guardados en la BDD son: ',respuesta.data);
                respuesta.data.map ((elemento) => {
                    dispatch(agregarArqueo(elemento));
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

// Accion de aniadir un egreso con valores de decontruccion default
export const agregarArqueo = (arqueoToAgregar) => ({
    type: 'AGREGA_ARQUEO',
    compra: arqueoToAgregar
});
