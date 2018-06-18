import React from 'react';
import moment from 'moment'; // Importacion de momentos
import ArqueoInicioReal from './ArqueoInicioReal';
import { SingleDatePicker } from 'react-dates'; // Importacion de React Dates
import 'react-dates/lib/css/_datepicker.css' // Importacion del CSS
import ArqueoCierre from './ArqueoCierre';
import ArqueoInicioTeorico from './ArqueoInicioTeorico';

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
            // Atencion se tiene que crear otra instancia de moment() para poder sumar un dia sin alterar la misma instancia de moment 2 veces
            let momentoSiguiente = moment(creadoEnForma.valueOf()).add(1,'d');
            let momentoAnterior  = moment(creadoEnForma.valueOf()).subtract(1,'d');  
            this.props.manejaCambioFechaEnPadre(creadoEnForma, momentoSiguiente, momentoAnterior);
        }
    };
    // Metodo de cambio de focus cuando se manipula el calendarito chevere
    enCambioCalendarFocused = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
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
                                <ArqueoInicioReal
                                    currentFecha = {this.state.creadoEn}
                                    currentArqueo = {
                                        this.props.arqueos.find((elemento) => {
                                        return moment(elemento.fecha).isSame(this.state.creadoEn,'day');
                                    }) 
                                    ? 
                                        this.props.arqueos.find((elemento) => {
                                            return moment(elemento.fecha).isSame(this.state.creadoEn,'day');
                                        })
                                    : 
                                        { 
                                            denom500: 0,
                                            denom200: 0,
                                            denom100: 0,
                                            denom50: 0,
                                            denom20: 0,
                                            denom10: 0,
                                            denom5: 0,
                                            denom2: 0,
                                            denom1: 0,
                                            denomPunto5: 0
                                        }
                                    }
                                    manejaGuardarArqueo = {this.props.manejaGuardarArqueo}
                                />
                            </div>
                            <div className = 'col-md-6'>
                                <ArqueoInicioTeorico
                                    currentFecha = {this.state.creadoEn}
                                    currentArqueo = {
                                        this.props.arqueos.find((elemento) => {
                                        return moment(elemento.fecha).isSame(this.state.creadoEn,'day');
                                    }) 
                                    ? 
                                        this.props.arqueos.find((elemento) => {
                                            return moment(elemento.fecha).isSame(this.state.creadoEn,'day');
                                        })
                                    : 
                                        { 
                                            denom500: 0,
                                            denom200: 0,
                                            denom100: 0,
                                            denom50: 0,
                                            denom20: 0,
                                            denom10: 0,
                                            denom5: 0,
                                            denom2: 0,
                                            denom1: 0,
                                            denomPunto5: 0
                                        }
                                    }
                                />
                            </div>
                        </div>
                        <div className = 'row'>
                            <div className = 'col-md-6'>
                                <ArqueoCierre
                                    currentFecha        = {this.state.creadoEn}
                                    manejaGuardarArqueo = {this.props.manejaGuardarArqueo}
                                    diaSiguiente        = {this.props.diaSiguiente}
                                    currentArqueoCierre = { 
                                        this.props.arqueos.find((elemento) => {
                                        return moment(elemento.fecha).isSame(this.props.diaSiguiente,'day');
                                    }) 
                                    ? 
                                        this.props.arqueos.find((elemento) => {
                                            return moment(elemento.fecha).isSame(this.props.diaSiguiente,'day');
                                        })
                                    : 
                                        { 
                                            denom500: 0,
                                            denom200: 0,
                                            denom100: 0,
                                            denom50: 0,
                                            denom20: 0,
                                            denom10: 0,
                                            denom5: 0,
                                            denom2: 0,
                                            denom1: 0,
                                            denomPunto5: 0
                                        }
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Arqueo;
