import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ListaVentas from './ListaVentas';

class Historico extends React.Component {
    // Estado inicial vacio
    state = {
        datos: {}
    }
    
    render() {
        return (
            <div>
            {/* Importacion del componente de lista de ventas*/}
                <ListaVentas />
            </div>
        )
    }
}

export default Historico;