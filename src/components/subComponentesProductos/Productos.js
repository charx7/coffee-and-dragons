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

    mannejaNuevoProducto = () => {
        // Hace que los props que se pasen al componente de detalles de producto sean para un producto nuevo
        this.setState({
            currentProducto: {
                descripcion: "Nueva Descripcion",
                precio: 'Nuevo Precio',
                imagen: 'URL Imagen',
                categoria: 'tienda'
            }
        });
    }

    render() {
        return (
            <div className='col-md-9'>
                {/* Importaciones del componente de lista de productos */}
                <ListaProductos
                    manejaProductoSeleccionado = {this.manejaProductoSeleccionado}
                    manejaNuevoProducto        = {this.mannejaNuevoProducto}
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