import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ListaProductoItem from './ListaProductoItem';
import obtenerProductosVisibles from './../../selectores/selectorProductos';

class ListaProductos extends React.Component {
    state = {
        datos: undefined,
        actualizo: false,
        filtroProductosTexto: ''
    }

    componentDidMount () {
        console.log('Empezo a jalar la lista de productos del almacen', this.props.productos);
        // Llama al metodo que carga los datos del servidor
        this.setState(() =>{
            return { datos: this.props.productos }
        });       
    }

    // Manejador de set al filtro de texto
    manejaCambioFiltroTexto = (e) => {
        const textoForma = e.target.value;
        this.setState({
            filtroProductosTexto: textoForma
        });
    }

    render() {
        return (    
            <div className='row'>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        Lista de Productos
                    </div>
                    <div className="panel-body">
                        <div className='row'>
                            <div className='col-md-6'>
                                <input 
                                    type="text"
                                    placeholder='Texto para filtrar'
                                    value = {this.state.filtroProductosTexto}
                                    onChange = {this.manejaCambioFiltroTexto}
                                    />
                            </div>
                            <div className='col-md-6'>
                                <p>PlaceHolder Filtro Categoria</p>
                            </div>
                        </div>
                        <h3>Productos Disponibles</h3>
                        <div className='row' id='contenedorProductos'>
                        {
                            obtenerProductosVisibles(this.props.productos,
                                this.state.filtroProductosTexto).map((elemento) => {
                                    return <ListaProductoItem
                                        key                        = {elemento._id}
                                        currentIdProducto          = {elemento._id}
                                        currentPrecio              = {elemento.precio}
                                        currentDescripcion         = {elemento.descripcion}
                                        currentImagen              = {elemento.imagen}
                                        currentCategoria           = {elemento.categoria}
                                        manejaProductoSeleccionado = {this.props.manejaProductoSeleccionado}
                                    />
                            })
                        }
                        <div className='col-md-2'>
                            <div className='thumbnail'>
                                <img src='https://cdn0.iconfinder.com/data/icons/cosmo-work/40/document_new-512.png' 
                                    className='img-thumbnail' 
                                    alt=" Producto C&D"
                                    onClick = {this.props.manejaNuevoProducto}
                                />
                                <p>
                                    <strong>Nuevo Producto</strong>                        
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


// Funcion que se encarga de hacer las conexiones de estado a los props que se pasaran 
const mapeoEstadoaProps = (estado, props) => {
    return {
        // Pasa un prop al componente ListadeProductos basado en el mapeo del almacen 
        productos: estado.productos
    };
}; 

export default connect(mapeoEstadoaProps) (ListaProductos);