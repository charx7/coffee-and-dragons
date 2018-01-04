import React from  'react';
import { connect } from 'react-redux'; // Redux para hacer sync con el almacen

const CarritoDeCompras = (props) => (
    <div className="row">
        <div className="panel panel-default">
            <div className="panel-heading">
                Lista de productos de la mesa {'   '}<i className="fa fa-shopping-bag" aria-hidden="true"></i>
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
                    <div className='col-md-6'>
                        <p>Total: MXN 500</p>
                        <p>Impuesto: MXN 52</p>
                        <p>Comision: 0</p>
                        <p>Mesa: 1</p>
                        <p>Fecha: 1 Ene 2018</p>
                        <p>Modo Pago: Tarjeta/Efectivo</p>
                        <button className='btn btn-primary'>Liquidar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// Funcion que se encarga de hacer las conexiones de estado a los props que se pasaran 
const mapeoEstadoaProps = (estado) => {
    return {
        // Pasa un prop al componente basado en el mapeo del almacen y filtrados con la funcion de selectorGastos
        productos: estado.productos
    };
}; 


export default connect(mapeoEstadoaProps)(CarritoDeCompras);