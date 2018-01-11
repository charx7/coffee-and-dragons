import React from  'react';
import { connect } from 'react-redux'; // Redux para hacer sync con el almacen
import Subtotal from './Subtotal'; // Importacion de componente de subtotal
import ListaProductosRecibo from './ListaProductosRecibo'; // Importacion componente de productos en recibo

class CarritoDeCompras extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        Lista de productos de la cuenta {this.props.recibo.id} {'   '}<i className="fa fa-shopping-bag" aria-hidden="true"></i>
                    </div>
                    <div className="panel-body">
                        <div className='row'>
                            {/* Importacoines de la lista de productos del recibo */}
                            <ListaProductosRecibo
                                currentCuentaActiva = {this.props.currentCuentaActiva}
                            />
                            {/* Importacion del componente de subtotales */}
                            <Subtotal
                                currentCuentaNumero      = {this.props.recibo.id}
                                currentMonto             = {this.props.recibo.monto}
                                currentMesa              = {this.props.recibo.mesa}
                                currentModoPago          = {this.props.recibo.modoPago}
                                currentComision          = {this.props.recibo.comision}
                                currentProductosEnCuenta = {this.props.recibo.idProductos}
                            />
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
        // Pasa un prop al componente basado en el mapeo del almacen
        productos: estado.productos,
        recibo: estado.recibos.find((recibo) => {
            return recibo.id == props.currentCuentaActiva;
        })
    };
}; 

export default connect(mapeoEstadoaProps)(CarritoDeCompras);