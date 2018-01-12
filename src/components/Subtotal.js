import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral'; 
// Importacion de la funcion que suma los montos de los precios
import sumaPrecioProductos from '../selectores/sumaPrecioProductos'; 
// TODO verificar cuanto es de IVA real XD
import { modificaRecibo } from '../acciones/recibos';

class Subtotal extends React.Component {
    
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         modoPago: this.props.recibo.modoPago
    //     }
    // }

    render() {
        return (
            <div className='col-md-6'>
                {console.log('Prueba funcion: ',sumaPrecioProductos(this.props.currentProductosEnCuenta, this.props.productos))}
                {console.log('Cantidad capturanda en monto: ', this.props.currentMonto)}
                {console.log('Se esta editando el recibo: ', this.props.currentCuentaNumero)}
                
                <p>Total:  {numeral(sumaPrecioProductos(this.props.currentProductosEnCuenta,this.props.productos)).format(('$0,0.[00]'))}</p>
                <p>SubTotal: {numeral( sumaPrecioProductos(this.props.currentProductosEnCuenta,this.props.productos) / 1.16).format('$0,0.[00]')} </p>
                <p>Impuesto: {numeral(sumaPrecioProductos(this.props.currentProductosEnCuenta,this.props.productos) - (sumaPrecioProductos(this.props.currentProductosEnCuenta,this.props.productos) / 1.16)).format(('$0,0.[00]'))}</p>
                <p>Comision: {this.props.currentComision}</p>
                <p>Mesa: {String(this.props.currentMesa)}</p>
                <p>Fecha: 1 Ene 2018</p>
                <p>
                    Modo de Pago
                    {' '}
                    <select 
                        value={this.props.recibos[(this.props.currentCuentaNumero) -1 ].modoPago + 'Selector'} 
                        onChange={ (e) => {
                        if ( e.target.value == 'efectivoSelector') {
                            this.props.dispatch(modificaRecibo(
                                this.props.currentCuentaNumero, { modoPago: 'efectivo' }
                            ));
                            //this.setState(()=> ({ modoPago: 'Efectivo' }));
                        } else {
                            alert('auch');
                            this.props.dispatch(modificaRecibo(
                                this.props.currentCuentaNumero, { modoPago: 'tarjeta' }
                            ));
                            //this.setState(()=> ({ modoPago: 'Tarjeta' }));
                        }
                    }}>
                        <option value='efectivoSelector'>Efectivo</option>
                        <option value='tarjetaSelector'>Tarjeta</option>
                    </select>
                </p>
                <button className='btn btn-primary'>Liquidar</button>
                {console.log(this.props.recibos[this.props.currentCuentaNumero -1].modoPago,'Selector')}
            </div>
        )
    }    
}

const mapeoEstadoAProps = (estado, props) => {
    return {
        recibos: estado.recibos,
        //recibo: estado.recibos.find((recibo) => {
        //   return recibo.id == props.currentCuentaNumero;
        //}),
        productos: estado.productos
    };
};

export default connect(mapeoEstadoAProps)(Subtotal);