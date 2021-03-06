import React from 'react';
import moment from 'moment';

class EditarCompra extends React.Component {
    
    render () {
        return (
            <div className = 'row'>
                <div className = 'panel panel-default'>
                    <div className = 'panel-heading'>
                        <strong> Detalles de la Compra {''}
                            {this.props.currentCompra ? this.props.currentCompra._id : ''}
                        </strong>     
                    </div>
                    <div className = 'panel-body'>
                        <h4>
                            <strong>
                                Nombre de la Compra {''}
                            </strong> 
                            {this.props.currentCompra ? this.props.currentCompra.descripcion: ''}
                        </h4>
                        <h4>
                            <strong>
                                Proveedor {''} 
                            </strong>
                            {this.props.currentCompra ? this.props.currentCompra.proveedor : ''}
                        </h4>
                        <h4>
                            <strong>
                                Modo de Pago {''}
                            </strong>
                            {this.props.currentCompra ? this.props.currentCompra.modoPago: ''}
                        </h4>
                        <h4>
                            <strong>
                                Unidad de Presentacion {' '}
                            </strong>
                            {this.props.currentCompra ? this.props.currentCompra.unidadPresentacion: ''}
                        </h4>
                        <h4>
                            <strong>
                                Precio Por Unidad {''}
                            </strong>
                            {this.props.currentCompra ? this.props.currentCompra.precio : ''} 
                        </h4>
                        <h4>
                            <strong>
                                Cantidad {''}
                            </strong>
                            {this.props.currentCompra && this.props.currentCompra.cantidad}
                        </h4>
                        <h4>
                            <strong>
                                Precio Total {' '}
                            </strong>
                            {' '}{this.props.currentCompra && (this.props.currentCompra.cantidad 
                                ? (this.props.currentCompra.cantidad * this.props.currentCompra.precio)
                                : this.props.currentCompra.precio
                            )}
                        </h4>
                        <h4>
                            <strong>
                                Fecha {''}
                            </strong>
                            {this.props.currentCompra ? moment(this.props.currentCompra.fecha).format('MMM Do. YYYY') : ''}
                        </h4>
                        <button
                            className = 'btn btn-danger'
                            onClick   = {() => {this.props.manejaElminarVenta(this.props.currentCompra._id)}}
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditarCompra;
