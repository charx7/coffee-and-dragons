import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral'; 
// Importacion de la funcion que suma los montos de los precios
import sumaPrecioProductos from '../selectores/sumaProductos'; 
// TODO verificar cuanto es de IVA real XD
const Subtotal = (props) => (
    <div className='col-md-6'>
        {console.log('Cantidad capturanda en monto: ', props.currentMonto)}
        {console.log('Se esta editando el recibo: ',props.currentCuentaNumero)}
        <p>Total:  {numeral(sumaPrecioProductos(props.productosEnCarrito)).format(('$0,0.[00]'))}</p>
        <p>SubTotal: {numeral( sumaPrecioProductos(props.productosEnCarrito)/ 1.16).format('$0,0.[00]')} </p>
        <p>Impuesto: {numeral(sumaPrecioProductos(props.productosEnCarrito) - (sumaPrecioProductos(props.productosEnCarrito) / 1.16)).format(('$0,0.[00]'))}</p>
        <p>Comision: {props.currentComision}</p>
        <p>Mesa: {String(props.currentMesa)}</p>
        <p>Fecha: 1 Ene 2018</p>
        <p>Modo Pago: {props.currentModoPago}</p>
        <button className='btn btn-primary'>Liquidar</button>
    </div>    
);

const mapeoEstadoAProps = (estado, props) => {
    return {
        productosEnCarrito: estado.productos.filter((elemento) => {
            return props.currentProductosEnCuenta.includes(elemento.id); 
        })
    };
};

export default connect(mapeoEstadoAProps)(Subtotal);