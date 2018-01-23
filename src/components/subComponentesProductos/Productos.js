import React from 'react';
import ReactDOM from 'react-dom';
import ListaProductos from './ListaProductos';
import EditarProducto from './EditarProducto';

class Productos extends React.Component {
    state = {
        currentProducto: {}
    }

    manejaProductoSeleccionado = (resultadoQuery) => {
        console.log('Entro a marcar resultado query');
        this.setState({
            currentProducto: resultadoQuery
        });
    }

    render() {
        return (
            <div className='col-md-9'>
                {/* Importaciones del componente de lista de productos */}
                <ListaProductos
                    manejaProductoSeleccionado = {this.manejaProductoSeleccionado}
                />
                {/* Importaciones del componente de editar un producto */}
                <EditarProducto
                    currentProducto = {this.state.currentProducto}
                />
            </div>
        )
    }
}

export default Productos;