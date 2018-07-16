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
        ventasCafeteria: [],
        ventasTienda: [],
        loading: true, 
        porcentajeUtilidadCafeteria: 50,
        porcentajeUtilidadTienda: 30
    }

    componentDidMount() {
        console.log('El componente esta cargando: ', this.state.loading);
        this.manejaCallAsync();
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.creadoEn != prevState.creadoEn) {
            this.setState({
               loading: true
            }, () => {
                console.log('El edo de la carga es: ', this.state.loading);
                this.forceUpdate();
                this.manejaCallAsync();
            })
        }
    }
  
    manejaCallAsync = async () => {
        let datos = await this.manejaObtenerVentas();
        this.setState({
            ventasCafeteria: datos.totalCafeteria,
            ventasTienda: datos.totalTienda,
            loading: false
        });
    }

    // Codigo asyncrono de forma de promesa
    // manejaCallAsync = () => { 
    //     this.manejaObtenerVentas().then((valorResuelto) => {
    //         this.setState({
    //             ventasCafeteria: valorResuelto.totalCafeteria,
    //             loading: false
    //         });
    //     });
    //     console.log('Las ventas antes de reolver la promesa son: ',this.state.ventasCafeteria);
    // }

    // Metodo que hace fetch a las ventas que se van a desplegar
    async manejaObtenerVentas () {
        return new Promise((resolve, reject) => {
            // Obtenemos el primer dia del mes
            let primerDiaMes = moment(this.state.creadoEn).startOf('month');
            console.log(primerDiaMes);
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
            let datosPromesa = {
                totalTienda: totalTienda,
                totalCafeteria: totalCafeteria
            };
            resolve(datosPromesa);
        });
    }

    // Metodo que se encarga de manipular el estado de Fecha segun el calendario chevere de la libreria 3rd party
    manejaCambioFecha = (creadoEnForma) => {
        if(creadoEnForma) {
            this.setState({ creadoEn: creadoEnForma });
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

    manejaCambioUtilidadCafeteria = (e) => {
        let cadenaUtilidadCafeteria = e.target.value;
        if(!cadenaUtilidadCafeteria || cadenaUtilidadCafeteria.match(/(^(100(?:\.0{1,2})?))|(?!^0*$)(?!^0*\.0*$)^\d{1,2}(\.\d{1,2})?$/)) {
            this.setState({
                porcentajeUtilidadCafeteria: cadenaUtilidadCafeteria 
            });
        }
    }

    manejaCambioUtilidadTienda = (e) => {
        let cadenaUtilidadTienda = e.target.value;
        if(!cadenaUtilidadTienda || cadenaUtilidadTienda.match(/(^(100(?:\.0{1,2})?))|(?!^0*$)(?!^0*\.0*$)^\d{1,2}(\.\d{1,2})?$/)) {
            this.setState({
                porcentajeUtilidadTienda: cadenaUtilidadTienda
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
                                                <strong>
                                                    Gastos Fijos 
                                                </strong>
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
                                        <div className='form-group row'>
                                            <div className='col-md-4' id='inputCantidadVentas'>
                                                <strong>
                                                    % Utilidad Cafeteria   
                                                </strong>
                                            </div>
                                            <div className='col-md-7'>
                                                <input
                                                    className = 'form-control' 
                                                    type      = "text"
                                                    maxLength = "8" 
                                                    size      = "8"
                                                    value     = {this.state.porcentajeUtilidadCafeteria}
                                                    onChange  = {this.manejaCambioUtilidadCafeteria}
                                                /> 
                                            </div> 
                                        </div>
                                        <div className='form-group row'>
                                            <div className='col-md-4' id='inputCantidadVentas'>
                                                <strong>
                                                    % Utilidad Tienda  
                                                </strong>
                                            </div>
                                            <div className='col-md-7'>
                                                <input
                                                    className = 'form-control' 
                                                    type      = "text"
                                                    maxLength = "8" 
                                                    size      = "8"
                                                    value     = {this.state.porcentajeUtilidadTienda}
                                                    onChange  = {this.manejaCambioUtilidadTienda}
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
                                            {numeroDiasEnMes(moment(this.state.creadoEn).startOf('month'), 0)}
                                        </strong> 
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div>
                                        Mes Actual: 
                                        {' '}
                                        <strong>
                                            { moment(this.state.creadoEn).format('MMMM') } 
                                        </strong> 
                                        {' '}
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
                                <div className='col-md-12'>
                                    {this.state.loading == true 
                                    ?
                                    <div>...Loading...</div>
                                    :
                                    <TablaCostos 
                                        currentMes      = {this.state.creadoEn} 
                                        ventas          = {this.props.ventas}
                                        ventasCafeteria = {this.state.ventasCafeteria}
                                        ventasTienda    = {this.state.ventasTienda}
                                        gastosFijos     = {this.state.gastosFijos}
                                        montoRequerido  = {
                                            this.state.gastosFijos / (this.state.creadoEn.daysInMonth() - numeroDiasEnMes(moment(this.state.creadoEn).startOf('month'), 0))
                                        }
                                        porcentajeUtilidadCafeteria = {this.state.porcentajeUtilidadCafeteria}
                                        porcentajeUtilidadTienda    = {this.state.porcentajeUtilidadTienda}
                                    />
                                    }
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
