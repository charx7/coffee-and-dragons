import React from 'react';
import CarritoDeComprasItem from './CarritoDeComprasItem';
import uuid from 'uuid'; // Para generar los id que van a ir en las keys

class CarritoDeCompras extends React.Component{
    render() {
        return(
            <div className='col-md-6'>
                <ul className='list-group'>
                    {
                        this.props.carritoDeCompras.map((elemento) => {
                            return <CarritoDeComprasItem
                                key                          = {elemento.uuid}
                                currentIdEgreso              = {elemento.idEgreso}
                                manejaQuitarEgreso           = {this.props.manejaQuitarEgreso}
                                manejaAgregarCantidadCarrito = {this.props.manejaAgregarCantidadCarrito}
                                // Pasamos el uuid como identificador unico del elemento del carrito de compras que se genero cuando
                                // dimos click en agregar producto
                                uuid                         = {elemento.uuid}
                            />
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default CarritoDeCompras;
