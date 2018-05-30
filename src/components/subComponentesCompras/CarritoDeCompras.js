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
                                key                = {uuid()}
                                currentIdEgreso    = {elemento}
                                manejaQuitarEgreso = {this.props.manejaQuitarEgreso}
                            />
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default CarritoDeCompras;
