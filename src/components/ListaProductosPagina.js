import React from  'react';
import { connect } from 'react-redux'; // Redux para hacer sync con el almacen
import ProductosItemPagina from './ProductosItemPagina'; // importacion del componente individual de Gasto

const ListaProductosPagina = (props) => (
    <div>
    <p>Aqui va un filtro de productos por texto</p>
    <p>Aqui va un filtro de productos por categoria</p>
    {
        props.productos.map( (elemento) => {
            return <ProductosItemPagina 
                    key = {elemento.id}
                    currentIdProducto       = {elemento.id}
                    currentPrecio           = {elemento.precio}
                    currentDescripcion      = {elemento.descripcion}
                    currentImagen           = {elemento.imagen}
                    currentCuentaActiva     = {props.currentCuentaActiva}
                    currentArregloProductos = {props.recibo.idProductos}
                    />
        })
    }
    </div>
);

// Funcion que se encarga de hacer las conexiones de estado a los props que se pasaran 
const mapeoEstadoaProps = (estado, props) => {
    return {
        // Pasa un prop al componente ListadeProductos basado en el mapeo del almacen y filtrados con la funcion de selectorGastos
        productos: estado.productos,
        recibo: estado.recibos.find((elemento) => {
            return elemento.id == props.currentCuentaActiva
        })
    };
}; 


export default connect(mapeoEstadoaProps)(ListaProductosPagina);