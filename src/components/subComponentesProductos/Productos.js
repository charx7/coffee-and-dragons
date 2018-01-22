import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ListaProductos from './ListaProductos';

class Productos extends React.Component {
    state = {
        datos: {},
        actualizo: false
    }

    render() {
        return (
            <div className='col-md-9'>
                {/* Importaciones del componente de lista de productos */}
                <ListaProductos/>
            </div>
        )
    }
}

export default Productos;