import React from 'react';
import { connect } from 'react-redux';

// Componente funcional de item de mesas
class ProductosItemPagina extends React.Component  {
    render () {
        return (
            <div className='col-md-2'>
                <div className='thumbnail'>
                    <img src="https://cf.geekdo-images.com/mvqw7ruqcaYmwp1vxhYOGa0On5c=/fit-in/1200x630/pic2838574.jpg" 
                        className='img-thumbnail' 
                        alt="cinque terre"
                    />
                    <p>{this.props.currentDescripcion}</p>
                    <p>Precio: MXN {this.props.currentPrecio}</p>
                    <div id='contenedor-boton-productos'>
                        <button className='btn btn-success' id='boton-productos'>
                            <span className="glyphicon glyphicon-shopping-cart"></span> Agregar 
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductosItemPagina;