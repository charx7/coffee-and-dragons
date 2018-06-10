import axios from 'axios';

// Para hacer un Create a la BDD de Mongo
export const empiezaNuevoArqueo = (arqueoToAgregar) => {
    return(dispatch) => {
        console.log('Entro a agregar un arqueo a la BDD ', arqueoToAgregar);
        return axios.post('/api/arqueos', arqueoToAgregar)
            .then(res => {
                console.log('Se agrego un arqueo a la BDD', res);
                // Agrega el producto aniadido a la BDD al almacen de redux
                dispatch(agregarArqueo(res.data));
            })
            .catch( err => {
                console.log('Error Agregando nuevo Arqueo', err);
            });
    };
};

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

// Codigo para que haga un edit a la BDD de Mongo
export const empiezaEditarArqueo = (id, actualizaciones) => {
    return (dispatch) => {
        console.log('Entro a editar', id);
        return axios.put(`/api/arqueos/${id}`, actualizaciones)
            .then((respuesta) => {
                console.log(respuesta.data);
                dispatch(editarArqueo(id, actualizaciones));
            })
            .catch((error) => {
                console.log(error);
            });  
        }
};

// Accion Editar un egreso
export const editarArqueo = (id, actualizaciones) => ({
    type: 'EDITAR_ARQUEO',
    id,
    actualizaciones
});
