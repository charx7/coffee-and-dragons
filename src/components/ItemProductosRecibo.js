import React from 'react';
import { connect } from 'react-redux';

const ItemProductosRecibo = (props) => (
    <li className='list-group-item' id='li-botones-producto'>
        Id: {props.currentIdProducto} {props.nombreProducto.descripcion}  {' '}
        <button className='btn btn-xs btn-success' id='li-botones-producto'>+ </button>
        {'   '}
        <button className='btn btn-xs btn-danger' id='li-botones-producto'>-</button>
        <span className="badge">1</span>
    </li>
)

const mapeoEstadoAProps = (estado, props) => {
    return {
        // Pasa un prop al componente basado en el mapeo del almacen
        nombreProducto: estado.productos.find((elemento) => {
            return elemento.id == props.currentIdProducto;
        })
    };
}

export default connect(mapeoEstadoAProps)(ItemProductosRecibo);