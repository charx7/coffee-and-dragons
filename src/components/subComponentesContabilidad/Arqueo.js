import React from 'react';
import moment from 'moment'; // Importacion de momentos
import ArqueoInicio from './ArqueoInicio';
import { SingleDatePicker } from 'react-dates'; // Importacion de React Dates
import 'react-dates/lib/css/_datepicker.css' // Importacion del CSS
import ArqueoCierre from './ArqueoCierre';

// Creamos un objeto de la libreria moment
const now = moment();
console.log(now.format('MMM Do, YYYY'));

class Arqueo extends React.Component {
    state = {
        calendarFocused: false,
        creadoEn: moment()
    }

    // Metodo que se encarga de manipular el estado de Fecha segun el calendario chevere de la libreria 3rd party
    manejaCambioFecha = (creadoEnForma) => {
        if(creadoEnForma) {
            this.setState(() => ({ creadoEn: creadoEnForma }));
            // Le pasamos el prop al padre
            this.props.manejaCambioFechaEnPadre(creadoEnForma);
        }
    };
    // Metodo de cambio de focus cuando se manipula el calendarito chevere
    enCambioCalendarFocused = ({ focused }) => {
        this.setState( () => ({ calendarFocused: focused }));
    };

    render () {
        return (
            <div className = 'row'>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        Arqueo
                    </div>
                    <div className="panel-body">
                        <div className = 'row'>
                            <div className = 'col-md-6'>
                                <h3>
                                    Hola <strong> {this.props.nombreUsuario} </strong>
                                </h3>
                                <h4>
                                    Fecha: <strong> {moment(this.state.creadoEn).format('MMMM Do YYYY')} </strong>
                                </h4>
                            </div>
                            <div className = 'col-md-6'>
                                <div>
                                    <strong> Seleccione la Fecha{' '}</strong> 
                                    <SingleDatePicker
                                        // Props necesarios para que funcione el calendario
                                        date           = {this.state.creadoEn}
                                        onDateChange   = {this.manejaCambioFecha}
                                        focused        = {this.state.calendarFocused}
                                        onFocusChange  = {this.enCambioCalendarFocused}
                                        numberOfMonths = {1}
                                        isOutsideRange = {(day) => false }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='row'>    
                            <div className='col-md-6'>
                                <ArqueoInicio
                                    currentFecha = {this.state.creadoEn}
                                />
                            </div>
                            <div className = 'col-md-6'>
                                <ArqueoCierre/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Arqueo;
