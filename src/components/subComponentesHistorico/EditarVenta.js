import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class EditarVenta extends React.Component {
    manejaEliminarVenta = () => {
        alert('AUCHXD');
    }

    render() {
        return(
            <div className="row">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        Detalles de la Venta... X
                    </div>
                    <div className="panel-body">
                        <h4>{this.props.ventaMostrada && this.props.ventaMostrada.descripcion}</h4>    
                        <h4>Precio: {this.props.ventaMostrada && this.props.ventaMostrada.precio}</h4>
                        <h4>Modo Pago: {this.props.ventaMostrada && this.props.ventaMostrada.modoPago}</h4>
                        <h4>Comision: {this.props.ventaMostrada && this.props.ventaMostrada.comision}</h4>
                        <h4>Fecha: {this.props.ventaMostrada && this.props.ventaMostrada.fecha }</h4>
                            {this.props.ventaMostrada && 
                            <button 
                                className='btn btn-danger'
                                onClick={this.manejaEliminarVenta}
                            >
                                ELIMINAR
                            </button>}
                    </div>
                </div>
            </div>
        )
    }
}

const mapeoEstadoAProps = (estado) => {
    return {
        ventaMostrada: estado.ventas[0]
    }
}

export default connect(mapeoEstadoAProps)(EditarVenta);