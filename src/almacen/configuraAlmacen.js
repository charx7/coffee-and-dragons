import {createStore, combineReducers, applyMiddleware, compose} from 'redux'; // Importaciones de Redux
// Importamos los reductores necesarios que queremos combinar y usar para crear el almacen
import thunk from 'redux-thunk'; // Importacion para el middleware de thunk
import reductorCuentas from '../reductores/reductorCuentas'; // Importacion de reductor
import reductorProductos from '../reductores/reductorProductos'; // Importacion de reductor
import reductorRecibos from '../reductores/reductorRecibos'; // Importacion de reductor
import reductorVentas from  '../reductores/reductorVentas'; // Importacion de reductor
import reductorAuthentication from '../reductores/reductorAthentication'; // Importacion de reductor
import reductorEgresos from '../reductores/reductorEgresos'; // Importacion de reductor
import reductorCompras from '../reductores/reductorCompras'; // Importacion de reductor
// Linea para configurar el almacen con las devtools y el middleware
const componerMejoras = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

// Funcion que vamos a exportar
export default () => {
    // Creacion del Store(Almacen)
    const almacen = createStore(
        // Metodo que combina reductores indivicuales haciendo referencia a los elementos raiz que queremos manejar por separado
        combineReducers({
            // Le asignamos un reductor especifico
            cuentas: reductorCuentas,
            productos: reductorProductos,
            recibos: reductorRecibos,
            ventas: reductorVentas,
            authentication: reductorAuthentication,
            egresos: reductorEgresos,
            compras: reductorCompras
        }),
        // Para utilizar el middleware de thunk que conecta connect con dispatch()
        componerMejoras(applyMiddleware(thunk))
        // ANTIGUO Linea para configurar las Redux Dev tools
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    // Para definir que vamos a exportar nuestro Store(almacen)
    return almacen;
};
