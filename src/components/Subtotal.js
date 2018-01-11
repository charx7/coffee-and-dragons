import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral'; 

const Subtotal = (props) => (
    <div className='col-md-6'>
        {console.log(props.currentMonto)}
        <p>Total:  {numeral(props.currentMonto).format(('$0,0.[00]'))}</p>
        <p>SubTotal: {numeral(props.currentMonto / 1.16).format('$0,0.[00]')} </p>
        <p>Impuesto:  {numeral(props.currentMonto - (props.currentMonto / 1.16)).format(('$0,0.[00]'))}</p>
        <p>Comision: {props.currentComision}</p>
        <p>Mesa: {String(props.currentMesa)}</p>
        <p>Fecha: 1 Ene 2018</p>
        <p>Modo Pago: {props.currentModoPago}</p>
        <button className='btn btn-primary'>Liquidar</button>
    </div>    
);


export default Subtotal;