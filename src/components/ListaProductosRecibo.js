import React from 'react';
import { connect } from 'react-redux';
import ItemProductosRecibo from './ItemProductosRecibo';

class ListaProductosRecibo extends React.Component {
    render() {
        return (
            <div className='col-md-6'>
                <ul className='list-group'>
                    {console.log('Lista de productos: ',this.props.recibo.idProductos)}
                    {
                        this.props.recibo.idProductos.map((elemento) =>{
                            return <ItemProductosRecibo
                                    key = {elemento}
                                    currentIdProducto = {elemento}
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