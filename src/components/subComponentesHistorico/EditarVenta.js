import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { mostrarVenta } from '../../acciones/ventas';
import moment from 'moment';

class EditarVenta extends React.Component {

    render() {
        return(
            <div className="row">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        Detalles de la Venta {
                            this.props.currentVenta &&
                            this.props.currentVenta._id
                        }
                    </div>
                    <div className="panel-body">
                        <h4>Nombre del Producto: {this.props.currentVenta && this.props.currentVenta.descripcion}</h4>
                        <h4>Categoria: {this.props.currentVenta && this.props.currentVenta.categoria}</h4>    
                        <h4>Precio: {this.props.currentVenta && this.props.currentVenta.precio}</h4>
                        <h4>Modo Pago: {this.props.currentVenta && this.props.currentVenta.modoPago}</h4>
                        <h4>Comision: {this.props.currentVenta && this.props.currentVenta.comision}</h4>
                        <h4>Fecha: {this.props.currentVenta && moment(this.props.currentVenta.fecha).format('MMM Do, YYYY') }</h4>
                            {this.props.currentVenta && 
                            <button 
                                className='btn btn-danger'
                                onClick={() => {
                                    this.props.manejaEliminarVenta(this.props.currentVenta._id)
                                }}
                            >
                                ELIMINAR
                            </button>}
                    </div>
                </div>
            </div>
        )
    }
}

export default EditarVenta;
