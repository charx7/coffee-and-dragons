import axios from 'axios';

// Query de Todos los egresos para guardarlos en el almacen
export const empiezaAgregarEgresos = () => {
    return (dispatch) => {
        // Hacemos un query a la BDD de MONGO que jala todos los egresos registrados
        return axios.get('/api/egresos')
            .then( (respuesta) => {
                console.log('Los egresos guardados en la BDD son: ',respuesta.data);
                respuesta.data.map ((elemento) => {
                    dispatch(agregarEgreso(elemento));
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
};

// Accion de aniadir un egreso con valores de decontruccion default
export const agregarEgreso = (egresoAAgregar) => ({
    type: 'AGREGA_EGRESO',
    egreso: egresoAAgregar
});

// Codigo para que haga un edit a la BDD de Mongo
export const empiezaEditarEgreso = (id, actualizaciones) => {
    return (dispatch) => {
        console.log('Entro a editar', id);
        return axios.put(`/api/egresos/${id}`, actualizaciones)
            .then((respuesta) => {
                console.log(respuesta.data);
                dispatch(editarEgreso(id, actualizaciones));
            })
            .catch((error) => {
                console.log(error);
            });  
        }
};

// Accion Editar un egreso
export const editarEgreso = (id, actualizaciones) => ({
    type: 'EDITAR_EGRESO',
    id,
    actualizaciones
});
