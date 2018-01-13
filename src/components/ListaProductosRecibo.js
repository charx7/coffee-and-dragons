import React from 'react';
import { connect } from 'react-redux';
import ItemProductosRecibo from './ItemProductosRecibo';
import uuid from 'uuid'; // Para generar los id que van a ir en las keys

class ListaProductosRecibo extends React.Component {
    render() {
        return (
            <div className='col-md-6'>
                <ul className='list-group'>
                    {console.log('Lista de productos: ',this.props.recibo.idProductos)}
                    {
                        this.props.recibo.idProductos.map((elemento) =>{
                            return <ItemProductosRecibo
                                    key                           = {uuid()}
                                    currentIdProducto             = {elemento}
                                    currentCuentaActiva           = {this.props.currentCuentaActiva}
                                    currentListaProductosEnRecibo = {this.props.recibo.idProductos}
                                    />
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapeoEstadoAProps = (estado, props) => {
    return {
        // Pasa un prop al componente basado en el mapeo del almacen
        recibo: estado.recibos.find((recibo) => {
            return recibo.id == props.currentCuentaActiva;
        })
    };
}

export default connect(mapeoEstadoAProps)(ListaProductosRecibo);