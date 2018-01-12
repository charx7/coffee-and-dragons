import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral'; 
// Importacion de la funcion que suma los montos de los precios
import sumaPrecioProductos from '../selectores/sumaPrecioProductos'; 
// TODO verificar cuanto es de IVA real XD
const Subtotal = (props) => (
    <div className='col-md-6'>
        {console.log('Prueba funcion: ',sumaPrecioProductos(props.currentProductosEnCuenta,props.productos))}
        {console.log('Cantidad capturanda en monto: ', props.currentMonto)}
        {console.log('Se esta editando el recibo: ', props.currentCuentaNumero)}
        {console.log('objeto de current productos: ', props.productos)}
        <p>Total:  {numeral(sumaPrecioProductos(props.currentProductosEnCuenta,props.productos)).format(('$0,0.[00]'))}</p>
        <p>SubTotal: {numeral( sumaPrecioProductos(props.currentProductosEnCuenta,props.productos) / 1.16).format('$0,0.[00]')} </p>
        <p>Impuesto: {numeral(sumaPrecioProductos(props.currentProductosEnCuenta,props.productos) - (sumaPrecioProductos(props.currentProductosEnCuenta,props.productos) / 1.16)).format(('$0,0.[00]'))}</p>
        <p>Comision: {props.currentComision}</p>
        <p>Mesa: {String(props.currentMesa)}</p>
        <p>Fecha: 1 Ene 2018</p>
        <p>Modo Pago: {props.currentModoPago}</p>
        <button className='btn btn-primary'>Liquidar</button>
    </div>    
);

const mapeoEstadoAProps = (estado) => {
    return {
        productos: estado.productos
    };
};

export default connect(mapeoEstadoAProps)(Subtotal);