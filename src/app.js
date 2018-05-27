// Importaciones de React
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css'; // Reseteo de los estilos de CSS con la nueva libreria
import './styles/styles.scss'; // Importacion de los archivos de CSS
import 'react-dates/lib/css/_datepicker.css'; // Importaciones de estilo del calendario para date-picking
import "react-dates/initialize"; // Importacion nueva necesaria para que sirva el calendario
import AppRouter from './routers/AppRouter';
import configuraAlmacen from './almacen/configuraAlmacen'; // Importacion del Almacen REDUX y su modelo con reducers
//import './firebase/firebase'; // Importaciones de Firebase para que corra //Por Ahora no usaremos Firebase
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'; // Imports de BS
import { empiezaAgregarProducto } from './acciones/productos'; // Import accion que toma los datos de la BDD
import { empiezaAgregarEgresos } from './acciones/egresos'; // Import de la accion que hace query a la BDD y los pone en el almacen

// acceso al modelo del almacen con REDUX
const almacen = configuraAlmacen();
// =========================================================================
// =======CODIGO IMPORTANTE DE LA APP LO DE ARRIBA ES PARA TESTEO===========
// =========================================================================
const jsx  = (
    /* Usamos el componente de Provider de React-Redux para pasarle el almacen a todos nuestros componentes como prop */
    <Provider store={almacen} >
        <AppRouter />
    </Provider>
);

// Rendereo de un mensaje de cargando...
ReactDOM.render(<p>Cargando...</p>, document.getElementById('app'));

almacen.dispatch(empiezaAgregarProducto())
    .then(almacen.dispatch(empiezaAgregarEgresos())
    .then(() => { 
    ReactDOM.render(jsx, document.getElementById('app'));
}));

// almacen.dispatch(empiezaSetGastos()).then(() => { 
//     // Esta accion se renderea cuando hay un exito en el async task de recuperar los datos de firebase
//     // Rendereo de toda la aplicacion usando el componente padre IndecisionApp
//     ReactDOM.render(jsx, document.getElementById('app'));
// });