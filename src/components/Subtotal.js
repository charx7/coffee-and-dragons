import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral'; 
// Importacion de la funcion que suma los montos de los precios
import sumaPrecioProductos from '../selectores/sumaPrecioProductos'; 
// TODO verificar cuanto es de IVA real XD //Acciones de los recibos
import {modificaRecibo,
        eliminaRecibo,
        modificaIndicesRecibos} from '../acciones/recibos';
import axios from 'axios';
// Para que construya el arreglo de ventas a Postear a la BDD usando la API
import construyeArregloVentas from '../selectores/constuyeArregloVentas';
import moment from 'moment'; // Importacion de momentos
import { SingleDatePicker } from 'react-dates'; // Importacion de React Dates
import 'react-dates/lib/css/_datepicker.css' // Importacion del CSS
// Acciones de las cuentas
import {eliminarCuenta,
        activaCuenta,
        modificaIndicesCuentas } from '../acciones/cuentas';

// Creamos un objeto de la libreria moment
const now = moment();
console.log(now.format('MMM Do, YYYY'));

class Subtotal extends React.Component {

    state = {
        calendarFocused: false,
        creadoEn: moment()
    }
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         modoPago: this.props.recibo.modoPago
    //     }
    // }
    
    manejaCancelarCuenta = () => {
        console.log('se va a cancelar',this.props.recibos[(this.props.currentCuentaNumero) -1 ].id);
        // Saca la cuenta activa en una variable
        const cuentaEliminar = this.props.recibos[(this.props.currentCuentaNumero) -1 ].id;
        if(cuentaEliminar == 1) {
            alert('No se puede eliminar la primera cuenta!');
            return
        }
        // Activa la cuenta 1 que siempre va a existir
        this.props.dispatch(activaCuenta( 1 , { activa: true } ));
        // Elimina la cuenta actual del almacen
        this.props.dispatch(eliminarCuenta(cuentaEliminar));
        // Redimensionamiento de los indices del arreglo de Cuentas
        this.props.dispatch(modificaIndicesCuentas());
        // Eliminamos el recibo
        this.props.dispatch(eliminaRecibo(cuentaEliminar));
        // Redimensionamiento de los indices del arreglo de Recibos
        this.props.dispatch(modificaIndicesRecibos());
    }

    // Metodo que se encarga de manipular el estado de Fecha segun el calendario chevere de la libreria 3rd party
    manejaCambioFecha = (creadoEnForma) => {
        if(creadoEnForma) {
            this.setState(() => ({ creadoEn: creadoEnForma }));
        }
    };
    // Metodo de cambio de focus cuando se manipula el calendarito chevere
    enCambioCalendarFocused = ({ focused }) => {
        this.setState( () => ({ calendarFocused: focused }));
    };
    
    manejaResetearRecibo = () => {
        // Hacemos reset de los items que estaban en la cuenta para dejarlos como un arreglo vacio
        this.props.dispatch(modificaRecibo(
            this.props.currentCuentaNumero, { idProductos: [], comision: 0 }
        ));
    }

    manejaPosteoVenta = (ventaAAniadir) => {
        axios.post('/api/ventas', ventaAAniadir)
            .then( res => {
                console.log('Se esta anadiendo la venta: ', ventaAAniadir)
                console.log('respuesta al posteo', res);
                // Llamada al metodo que resetear la lista de productos del recibo
                this.manejaResetearRecibo();
            })
            .catch(err => {
                console.log('hubo un error en el posteo', err);
            });
    }

    manejaLiquidaRecibo = () => {
        let ventasAPostear = construyeArregloVentas(
             this.props.currentProductosEnCuenta
            ,this.props.productos);
        console.log('Entro a liquidar el arreglo: ',ventasAPostear);
        if(ventasAPostear.length < 1) alert('No se puede liquidar una cuenta vacia');
        // Verificacion que la comision no sea un blanco
        let comisionCapturar = this.props.currentComision;
        if( this.props.currentComision == '') {
            comisionCapturar = 0;
        }
        ventasAPostear.map((elemento) => {
            let ventaAAniadir = {
                precio: elemento.precio,
                descripcion: elemento.descripcion,
                categoria: elemento.categoria,
                modoPago: this.props.recibos[(this.props.currentCuentaNumero) -1 ].modoPago,
                comision: comisionCapturar,
                fecha: this.state.creadoEn.valueOf(),
                idProducto: elemento.id
            }
            //console.log('El objeto a postear es: ',ventaAAniadir);
            this.manejaPosteoVenta(ventaAAniadir);        
        })
        
    }

    manejaCambioComision = (e) => {
        const comisionInput = e.target.value;
        if(!comisionInput || comisionInput.match(/^\d{1,2}$/)){
            this.props.dispatch(modificaRecibo(
                this.props.currentCuentaNumero, { comision: comisionInput }
            ));
        }
    };

    // Metodo que se encarga de elegir mesa
    manejaCambioMesa = (e) => {
        const selectorMesaValor = e.target.value
        switch (selectorMesaValor){
            case '1Selector':
                this.props.dispatch(modificaRecibo(
                    this.props.currentCuentaNumero, { mesa: 1 }
                ))
                return;
            case '2Selector':
                this.props.dispatch(modificaRecibo(
                    this.props.currentCuentaNumero, { mesa: 2 }
                ));
                return;
            case '3Selector':
                this.props.dispatch(modificaRecibo(
                    this.props.currentCuentaNumero, { mesa: 3 }
                ));
                return;
            case '4Selector':
                this.props.dispatch(modificaRecibo(
                    this.props.currentCuentaNumero, { mesa: 4 }
                ));
                return;
            case '5Selector':
                this.props.dispatch(modificaRecibo(
                    this.props.currentCuentaNumero, { mesa: 5 }
                ));
                return;
            case '6Selector':
                this.props.dispatch(modificaRecibo(
                    this.props.currentCuentaNumero, { mesa: 6 }
                ));
                return;
            case '7Selector':
                this.props.dispatch(modificaRecibo(
                    this.props.currentCuentaNumero, { mesa: 7 }
                ));
                return;
            case '8Selector':
                this.props.dispatch(modificaRecibo(
                    this.props.currentCuentaNumero, { mesa: 8 }
                ));
                return;
            case '9Selector':
                this.props.dispatch(modificaRecibo(
                    this.props.currentCuentaNumero, { mesa: 9 }
                ));
                return;
            case '10Selector':
                this.props.dispatch(modificaRecibo(
                    this.props.currentCuentaNumero, { mesa: 10 }
                ));
                return;
            default:
                alert('error no hay mesa XD');
                return;
        }
    };

    render() {
        return (
            <div className='col-md-6'>
                {console.log('Prueba funcion: ',sumaPrecioProductos(this.props.currentProductosEnCuenta, this.props.productos))}
                {console.log('Cantidad capturanda en monto: ', this.props.currentMonto)}
                {console.log('Se esta editando el recibo: ', this.props.currentCuentaNumero)}
                
                <p>Total:  {numeral(sumaPrecioProductos(this.props.currentProductosEnCuenta,this.props.productos)).format(('$0,0.[00]'))}</p>
                <p>SubTotal: {numeral(sumaPrecioProductos(this.props.currentProductosEnCuenta,this.props.productos) / 1.16).format('$0,0.[00]')} </p>
                <p>Impuesto: {numeral(sumaPrecioProductos(this.props.currentProductosEnCuenta,this.props.productos) - (sumaPrecioProductos(this.props.currentProductosEnCuenta,this.props.productos) / 1.16)).format(('$0,0.[00]'))}</p>
                <p>Comision: 
                    <input 
                        type        = "text"
                        placeholder = 'Comision'
                        size        = '1'
                        onChange    = {this.manejaCambioComision}
                        value       = {this.props.recibos[(this.props.currentCuentaNumero)-1].comision}
                    />
                </p>
                <p>Mesa: {' '}
                    <select 
                        value={this.props.recibos[(this.props.currentCuentaNumero) -1 ].mesa + 'Selector'} 
                        onChange={ this.manejaCambioMesa }>
                        <option value='1Selector'>1</option>
                        <option value='2Selector'>2</option>
                        <option value='3Selector'>3</option>
                        <option value='4Selector'>4</option>
                        <option value='5Selector'>5</option>
                        <option value='6Selector'>6</option>
                        <option value='7Selector'>7</option>
                        <option value='8Selector'>8</option>
                        <option value='9Selector'>9</option>
                        <option value='10Selector'>10</option>
                    </select>
                </p>
                
                <p>
                    Modo de Pago {' '}
                    <select 
                        value={this.props.recibos[(this.props.currentCuentaNumero) -1 ].modoPago + 'Selector'} 
                        onChange={ (e) => {
                        if ( e.target.value == 'efectivoSelector') {
                            this.props.dispatch(modificaRecibo(
                                this.props.currentCuentaNumero, { modoPago: 'efectivo' }
                            ));
                            //this.setState(()=> ({ modoPago: 'Efectivo' }));
                        } else {
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
                
                {/* Importaciones del componente de Single date picker de react-dates*/}
                <SingleDatePicker
                    // Props necesarios para que funcione el calendario
                    date           = {this.state.creadoEn}
                    onDateChange   = {this.manejaCambioFecha}
                    focused        = {this.state.calendarFocused}
                    onFocusChange  = {this.enCambioCalendarFocused}
                    numberOfMonths = {1}
                    isOutsideRange = {(day) => false }
                />
                <p></p>
                <button 
                    className='btn btn-primary'
                    onClick={this.manejaLiquidaRecibo}
                    >
                    Liquidar
                </button>
                {' '}
                <button
                    className='btn btn-danger'
                    /* onClick = {this.manejaCancelarCuenta} */
                    onClick = {this.manejaResetearRecibo}
                    >
                    Cancelar
                </button>
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