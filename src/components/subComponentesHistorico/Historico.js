import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ListaVentas from './ListaVentas';
import EditarVenta from './EditarVenta';

class Historico extends React.Component {
    // Estado inicial vacio
    state = {
        datos: {}
    }
    
    render() {
        return (
            <div className='col-md-9'>
                {/* Importacion del componente de lista de ventas*/}
                <ListaVentas />
                {/* Importacion del componente que edita una venta*/}
                <EditarVenta />
            </div>
        )
    }
}

export default Historico;