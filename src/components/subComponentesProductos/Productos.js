import React from 'react';
import ReactDOM from 'react-dom';
import ListaProductos from './ListaProductos';

class Productos extends React.Component {

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