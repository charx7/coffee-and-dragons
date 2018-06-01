import React from 'react';
import ListaComprasItem from "./ListaComprasItem";
import uuid from 'uuid'; // Para generar los id que van a ir en las keys
import moment from 'moment';
import { DateRangePicker } from 'react-dates'; // Importaciones para el picker de las fechas
import 'react-dates/lib/css/_datepicker.css' // Importacion del CSS
import obtenerComprasVisibles from '../../selectores/selectorCompras';

class ListaCompras extends React.Component {
    
    state = {
        filtroTextoCompras: '',
        focusCalendario: null,
        fechaInicial: moment(),
        fechaFinal: moment()
    }
    
    // Metodo encargado de la logica del cambio de fechas
    onDateChange = ( { startDate, endDate } ) => {
        // Llamamos a las acciones que modifican las fechas de los filtros en el almacen
        this.setState({
            fechaInicial: startDate,
            fechaFinal: endDate
        });
    };

    // Metodo de cambio de foco del calendario picker
    onFocusChange = (focusCalendario) => {
        this.setState(() => ({focusCalendario: focusCalendario}));
    };

    // Manejador del filtro
    manejaCambioFiltroCompras = (e) => {
        const inputTextoFiltro = e.target.value;
        this.setState({
            filtroTextoCompras: inputTextoFiltro
        });
    }

    render () {
        return (
            <div className = 'row'>
                <div className = 'panel panel-default'>
                    <div className = 'panel-heading'>
                        Lista Compras
                    </div>
                    <div className = 'panel-body'>
                        <div className = 'row'>
                            <div className = 'col-md-6'>
                                <p>
                                    Filtro Nombre Egreso
                                </p>
                                <input 
                                    type        ="text"
                                    placeholder = 'Texto a filtrar'
                                    value       = {this.state.filtroTextoCompras}
                                    onChange    = {this.manejaCambioFiltroCompras}
                                />
                            </div>
                            <div className='col-md-6'>
                                <p>Seleccione Periodo Para Desplegar:</p>
                                <DateRangePicker
                                    startDate     = {this.state.fechaInicial}
                                    endDate       = {this.state.fechaFinal}
                                    onDatesChange = {this.onDateChange}
                                    focusedInput  = {this.state.focusCalendario}
                                    onFocusChange = {this.onFocusChange}
                                    showClearDates = {true}
                                    numberOfMonths = {1}
                                    isOutsideRange = {() => false}
                                    startDateId   = {'startDate'}
                                    endDateId     = {'endDate'}
                                    minimumNights = {0}
                                />
                            </div>

                        </div>
                        <h3>
                            Lista Compras
                        </h3>
                        <ul className = 'list-group'>
                            {   
                                obtenerComprasVisibles(this.props.compras,this.state.filtroTextoCompras,'','',this.state.fechaInicial,this.state.fechaFinal)
                                .map((elemento) => {
                                return <ListaComprasItem
                                    key                      = {uuid()}
                                    currentCompraId          = {elemento._id}
                                    currentCompraDescripcion = {elemento.descripcion}
                                    currentCompraPrecio      = {elemento.precio}
                                    manejaEditarCompra       = {this.props.manejaEditarCompra}
                                />
                            })}
                        </ul>

                        <button 
                            className ='btn btn-lg btn-success'
                        >
                                Exportar a Excel
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListaCompras;