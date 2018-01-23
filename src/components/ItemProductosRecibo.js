import React from 'react';
import { connect } from 'react-redux';
import { modificaRecibo } from '../acciones/recibos';

const ItemProductosRecibo = (props) => (
    <li className='list-group-item' id='li-producto'>
        Id: {/*props.currentIdProducto*/} {props.nombreProducto.descripcion}  {' '}
        {/*<button className='btn btn-xs btn-success' id='li-botones-producto'>+ </button> */}
        {'   '}
        <button 
            className='btn btn-xs btn-danger float-right'
            id= 'boton-en-lista' 
            onClick={() => {
                // Sacamos el elemento que vamos a quitar del arreglo de los props
                const elementoQuitar = props.currentIdProducto;
                // Definimos cual es el arreglo al que le vamos a hacer las modificaciones
                const listaProductosActual = props.currentListaProductosEnRecibo
                // Obtenemos el indice de donde esta la primera instancia de ese elemento con .indexOf
                const indiceElementoARemover = listaProductosActual.indexOf(elementoQuitar);
                // Condicion que entra si el indice existe
                if( indiceElementoARemover > -1 ) {
                    // Quitamos el elemento del arreglo en el indice
                    listaProductosActual.splice(indiceElementoARemover, 1)
                }
                // Hacemos un push al almacen con el arreglo de idProductos modificado (ya no existe
                // el elemento que vamos a quitar en el nuevo arreglo)
                props.dispatch(modificaRecibo(
                    props.currentCuentaActiva, { idProductos: listaProductosActual }
                ));
            }}
            >   
            Remover
        </button>
        {/*<span className="badge">1</span>*/}
    </li>
)

const mapeoEstadoAProps = (estado, props) => {
    return {
        // Pasa un prop al componente basado en el mapeo del almacen
        nombreProducto: estado.productos.find((elemento) => {
            return elemento._id == props.currentIdProducto;
        })
    };
}

export default connect(mapeoEstadoAProps)(ItemProductosRecibo);