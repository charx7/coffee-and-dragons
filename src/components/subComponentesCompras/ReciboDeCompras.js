import React from 'react';
import moment from 'moment'; // Importacion de momentos
import { SingleDatePicker } from 'react-dates'; // Importacion de React Dates
import 'react-dates/lib/css/_datepicker.css' // Importacion del CSS
import numeral from 'numeral'; // Importacion de Numeral para formato de $

// Creamos un objeto de la libreria moment
const now = moment();
console.log(now.format('MMM Do, YYYY'));

class ReciboDeCompras extends React.Component {
    
    state = {
        calendarFocused: false,
        creadoEn: moment(),
        modoPago: 'efectivo'
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

    // Metodo que maneja el cambio en el modo de pago
    manejaCambioModoPago = (e) => {
        const modoPagoForma = e.target.value;
        this.setState(() => ({ modoPago: modoPagoForma }));
    }

    // Metodo que llama al liquidador de carrito de compras
    empiezaManejaLiquitarCarrito = () => {
        let modoPago = this.state.modoPago;
        let fecha    = this.state.creadoEn.valueOf();
        this.props.manejaLiquidarCarrito(modoPago, fecha);
    }

    render() {
        return(
            <div className='col-md-6'>
                <p>
                    <strong>Total: </strong> {numeral(this.props.manejaSumaPreciosEgresos()).format(('$0,0.[00]'))}
                </p>
                {/*<p>
                    <strong> Subtotal: </strong> {numeral(this.props.manejaSumaPreciosEgresos()/(1.16)).format(('$0,0.[00]'))}
                </p>
                <p>
                    <strong> Impuesto: </strong>  {numeral(this.props.manejaSumaPreciosEgresos()/(1.16)*(0.16)).format(('$0,0.[00]'))}
                </p> */}
                <p>
                    <strong> Modo de Pago: </strong>
                    <select
                        value    = {this.state.modoPago}
                        onChange = {this.manejaCambioModoPago}
                    >
                        <option value='efectivo'>      Efectivo</option>
                        <option value='tarjeta'>       Tarjeta</option>
                        <option value="transferencia"> Transferencia</option>
                        <option value='traspasoSobre'> Traspaso Sobre </option>
                    </select>
                </p>
                <p>
                    <strong> Fecha del Egreso: </strong>
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
                    className ='btn btn-primary'
                    onClick   = {this.empiezaManejaLiquitarCarrito}
                >
                    Liquidar
                </button>
                {' '}
                <button
                    className = 'btn btn-danger'
                    onClick   = {this.props.manejaVaciarCarrito}
                >
                    Cancelar
                </button>
            </div>
        )
    }
}

export default  ReciboDeCompras;
