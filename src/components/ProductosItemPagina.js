import React from 'react';
import { connect } from 'react-redux';
import { agregarProducto } from '../acciones/recibos';

// Componente funcional de item de mesas
class ProductosItemPagina extends React.Component  {
    // Metodo que empuja el producto al almacen de recibo
    manejoAgregaProducto = () => {
        console.log('El recibo al que se le agregara es: ',this.props.currentCuentaActiva);
        this.props.dispatch(agregarProducto( this.props.currentCuentaActiva, { 
            idProductos: [
                ...this.props.currentArregloProductos,
                this.props.currentIdProducto
            ] 
        }));
    }
    // Imagen de Catan
    // https://cf.geekdo-images.com/mvqw7ruqcaYmwp1vxhYOGa0On5c=/fit-in/1200x630/pic2838574.jpg

    render () {
        return (
            <div className='col-md-2'>
                <div className='thumbnail' id='contenedorThumbnail'>
                    <img src={this.props.currentImagen} 
                        className ='img-thumbnail' 
                        alt       ="Producto C&D"
                        id        ='imagenProducto'
                    />
                    <p id= 'contenedorDescripcion'>{this.props.currentDescripcion}</p>
                    <p id= 'contenedorPrecio'>Precio: MXN {this.props.currentPrecio}</p>
                    <div id='contenedor-boton-productos'>
                        <button 
                            className='btn btn-success' 
                            id='boton-productos' 
                            onClick={this.manejoAgregaProducto}
                        >
                            <span className="glyphicon glyphicon-shopping-cart"></span> Agregar 
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect() (ProductosItemPagina);