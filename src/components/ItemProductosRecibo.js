import React from 'react';

const ItemProductosRecibo = (props) => (
    <li className='list-group-item' id='li-botones-producto'>
        producto{props.currentIdProducto}  {' '}
        <button className='btn btn-xs btn-success' id='li-botones-producto'>+ </button>
        {'   '}
        <button className='btn btn-xs btn-danger' id='li-botones-producto'>-</button>
        <span className="badge">2</span>
    </li>
)

export default ItemProductosRecibo;