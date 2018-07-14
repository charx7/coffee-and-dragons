import React from 'react';
import TablaCostos from './TablaCostos';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates'; // Importacion de React Dates
import 'react-dates/lib/css/_datepicker.css' // Importacion del CSS
import numeroDiasEnMes from '../../helpers/numeroDiasEnMes'; // Importacion de la funcion de dias en el mes
import { connect } from 'react-redux';
import obtenerVentasVisibles from '../../selectores/selectorVentas'; // Importacion de la funcion para obtener las ventas
import { sumaPrecioVentas } from '../../selectores/selectorSumasConceptos'; // Importacion de la suma de los montos de ventas  

class AnalisisVentas extends React.Component {
    state = {
        calendarFocused: false,
        creadoEn: moment(),
        gastosFijos: 0,
        ventasCafeteria: 0,
        ventasTienda: 0
    }

    // Para jalar las ventas del mes por default
    componentDidMount() {
        this.manejaObtenerVentas();
    } 

    // Metodo que hace fetch a las ventas que se van a desplegar
    manejaObtenerVentas = () => {
        // Obtenemos el primer dia del mes
        let primerDiaMes = moment(this.state.creadoEn).startOf('month');
        // Cuantos dias hay en el mes seleccionado
        let numeroDiasMes =  moment(this.state.creadoEn).daysInMonth();
        // Creamos los objetos vacios para establecer el cambio de estado
        let totalCafeteria = [];
        let totalTienda = [];
        for (let i = 0; i < numeroDiasMes; i++) {
                // Hacemos los metodos para obtener los montos a desplegar por dia de ventas
                let ventasCafeteriaDia = obtenerVentasVisibles(this.props.ventas,'','cafeteria','',moment(primerDiaMes).add(i,'day'),moment(primerDiaMes).add(i,'day'));
                let montoVentasCafeteria = sumaPrecioVentas(ventasCafeteriaDia);
                // Hacemos push al arreglo 
                totalCafeteria.push(montoVentasCafeteria);
                // Ahora hacemos lo mismo pero para las ventas de tienda
                let ventasTiendaDia = obtenerVentasVisibles(this.props.ventas,'','tienda','',moment(primerDiaMes).add(i,'day'),moment(primerDiaMes).add(i,'day'));
                let montoVentasTienda = sumaPrecioVentas(ventasTiendaDia);
                // Hacemos push al arreglo
                totalTienda.push(montoVentasTienda);
        } 
        // Hacemo cambio al estado
        this.setState({
            ventasCafeteria: totalCafeteria,
            ventasTienda: totalTienda
        });
    };

    // Metodo que se encarga de manipular el estado de Fecha segun el calendario chevere de la libreria 3rd party
    manejaCambioFecha = (creadoEnForma) => {
        if(creadoEnForma) {
            this.setState({ creadoEn: creadoEnForma }, this.manejaObtenerVentas);
        }
    };

    // Metodo de cambio de focus cuando se manipula el calendarito chevere
    enCambioCalendarFocused = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    // Metodo que cambia los gastos fijos a pasar a los costos
    manejaCambioGastosFijos = (e) => {
        let cadenaGastosFijos = e.target.value;
        if(!cadenaGastosFijos || cadenaGastosFijos.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState({
                gastosFijos: cadenaGastosFijos 
            });
        }
    }

    render() {
        return(
            <div className='col-md-9'>
                <div className='row'>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Analisis de Ventas
                        </div>
                        <div className="panel-body">
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div>
                                        <div className='form-group row'>
                                            <div className='col-md-4 ' id='inputCantidadVentas'>
                                                Gastos Fijos {' '}
                                            </div> 
                                            <div className='col-md-7'>
                                                <input
                                                    className = 'form-control' 
                                                    type      = "text"
                                                    maxLength = "8" 
                                                    size      = "8"
                                                    value     = {this.state.gastosFijos}
                                                    onChange  = {this.manejaCambioGastosFijos}
                                                /> 
                                            </div> 
                                        </div>
                                    </div>
                                    <div>
                                        Numero de Dias L-S en el mes: {' '}
                                        <strong>
                                            {this.state.creadoEn.daysInMonth() - numeroDiasEnMes(moment(this.state.creadoEn).startOf('month'), 0)}
                                        </strong> 
                                    </div>
                                    <div>
                                        Numero de Domingos en el mes: {' '}
                                        <strong>
                                            { numeroDiasEnMes(moment(this.state.creadoEn).startOf('month'), 0)}
                                        </strong> 
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div>
                                        <SingleDatePicker
                                            // Props necesarios para que funcione el calendario
                                            date           = {this.state.creadoEn}
                                            onDateChange   = {this.manejaCambioFecha}
                                            focused        = {this.state.calendarFocused}
                                            onFocusChange  = {this.enCambioCalendarFocused}
                                            numberOfMonths = {1}
                                            isOutsideRange = {(day) => false }
                                        />
                                        {' '}
                                        Mes Actual: 
                                        {' '}
                                        <strong>
                                            { moment(this.state.creadoEn).format('MMMM') } 
                                        </strong> 
                                    </div>
                                </div>
                                <div className='col-md-12'>
                                    <TablaCostos 
                                        currentMes = {this.state.creadoEn} 
                                        ventas     = {this.props.ventas}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapeoEstadoToProps = (estado, props) => {
    return {
        // Mandamos como prop las compras que estan en el almacen
        ventas: estado.ventas
    }
}

export default connect(mapeoEstadoToProps)(AnalisisVentas);
