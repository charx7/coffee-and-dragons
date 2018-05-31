import React from 'react';
import moment from 'moment'; // Importacion de momentos
import { SingleDatePicker } from 'react-dates'; // Importacion de React Dates
import 'react-dates/lib/css/_datepicker.css' // Importacion del CSS
import numeral from 'numeral'; // Importacion de Numeral para formato de $

class ReciboDeCompras extends React.Component {
    
    state = {
        calendarFocused: false,
        creadoEn: moment()
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
                    <select>
                        <option value='efectivoSelector'>Efectivo</option>
                        <option value='tarjetaSelector'>Tarjeta</option>
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
                    className='btn btn-primary'
                >
                    Liquidar
                </button>
                {' '}
                <button
                    className='btn btn-danger'
                >
                    Cancelar
                </button>
            </div>
        )
    }
}

export default  ReciboDeCompras;
