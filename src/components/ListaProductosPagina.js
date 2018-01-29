import React from  'react';
import { connect } from 'react-redux'; // Redux para hacer sync con el almacen
import ProductosItemPagina from './ProductosItemPagina'; // Importacion del componente individual de Gasto
import obtenerProductosVisibles  from './../selectores/selectorProductos'; // Importacion del metodo para filtro de productos

class ListaProductosPagina extends React.Component {
    
    state = {
        filtroProductosTexto: '',
        filtroProductosCategoria: ''
    }

    manejaCambioFiltroTexto = (e) => {
        const inputFiltroTexto = e.target.value;
        this.setState({
            filtroProductosTexto: inputFiltroTexto
        });
    }

    manejaCambioFiltroCategoria = (e) => {
        const valorSelectorFiltroCategoria = e.target.value;
        switch (valorSelectorFiltroCategoria) {
            case 'tienda':
                this.setState({
                    filtroProductosCategoria: 'tienda'
                });
                return;
            case 'cafeteria':
                this.setState({
                    filtroProductosCategoria: 'cafeteria'
                });
                return;
            case 'todos':
                this.setState({
                    filtroProductosCategoria: ''
                });
                return;
            default:
                alert('No selecciono nada');
                return;
        }
    }

    render() {
        return(
            <div>
                <input 
                    type="text"
                    placeholder ='Texto para filtrar'
                    value       = {this.state.filtroProductosTexto}
                    onChange    = {this.manejaCambioFiltroTexto}
                />
                <p></p>
                <p>Seleccione Categoria</p>
                <select 
                    value    ={this.state.filtroProductosCategoria} 
                    onChange ={this.manejaCambioFiltroCategoria }>
                    <option value='tienda'>   Tienda</option>
                    <option value='cafeteria'>Cafeteria</option>
                    <option value='todos'>    Sin Filtro</option>
                </select>
                <br/>
                <br/>
                <div className='row' id='contenedorProductos'>
                    {
                        obtenerProductosVisibles(this.props.productos,
                        this.state.filtroProductosTexto,
                        this.state.filtroProductosCategoria).map( (elemento) => {
                            return <ProductosItemPagina 
                                    key                     = {elemento._id}
                                    currentIdProducto       = {elemento._id}
                                    currentPrecio           = {elemento.precio}
                                    currentDescripcion      = {elemento.descripcion}
                                    currentImagen           = {elemento.imagen}
                                    currentCuentaActiva     = {this.props.currentCuentaActiva}
                                    currentArregloProductos = {this.props.recibo.idProductos}
                                    />
                        })
                    }
                </div>
            </div>
        );
    }
}

// Funcion que se encarga de hacer las conexiones de estado a los props que se pasaran 
const mapeoEstadoaProps = (estado, props) => {
    return {
        // Pasa un prop al componente ListadeProductos basado en el mapeo del almacen y filtrados con la funcion de selectorGastos
        productos: estado.productos,
        recibo: estado.recibos.find((elemento) => {
            return elemento.id == props.currentCuentaActiva
        })
    };
}; 


export default connect(mapeoEstadoaProps)(ListaProductosPagina);