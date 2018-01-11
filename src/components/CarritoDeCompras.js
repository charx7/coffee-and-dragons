import React from  'react';
import { connect } from 'react-redux'; // Redux para hacer sync con el almacen
import Subtotal from './Subtotal'; // Importacion de componente de subtotal

const CarritoDeCompras = (props) => (
    <div className="row">
        <div className="panel panel-default">
            <div className="panel-heading">
                Lista de productos de la cuenta {'   '}<i className="fa fa-shopping-bag" aria-hidden="true"></i>
            </div>
            <div className="panel-body">
                <div className='row'>
                    <div className='col-md-6'>
                        <ul className='list-group'>
                            <li className='list-group-item' id='li-botones-producto'>
                                producto1  {' '}
                                <button className='btn btn-xs btn-success' id='li-botones-producto'>+ </button>
                                {'   '}
                                <button className='btn btn-xs btn-danger' id='li-botones-producto'>-</button>
                                <span className="badge">3</span>
                            </li>
                            <li className='list-group-item'>producto2<span className="badge">2</span>
                                {' '}
                                <button className='btn btn-xs btn-success' id='li-botones-producto'>+ </button>
                                {'   '}
                                <button className='btn btn-xs btn-danger' id='li-botones-producto'>-</button>
                            </li>
                        </ul>
                    </div>
                    {/* Importacion del componente de subtotales */}
                    <Subtotal
                        currentMonto    = {props.recibo.monto}
                        currentMesa     = {props.recibo.mesa}
                        currentModoPago = {props.recibo.modoPago}
                        currentComision = {props.recibo.comision}
                    />
                </div>
            </div>
        </div>
    </div>
);

// Funcion que se encarga de hacer las conexiones de estado a los props que se pasaran 
const mapeoEstadoaProps = (estado) => {
    return {
        // Pasa un prop al componente basado en el mapeo del almacen
        productos: estado.productos,
        recibo: estado.recibos.find((recibo) => {
            return recibo.id == 1
        })
    };
}; 

export default connect(mapeoEstadoaProps)(CarritoDeCompras);