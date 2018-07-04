import React from 'react';
import ListaComprasItem from "./ListaComprasItem";
import uuid from 'uuid'; // Para generar los id que van a ir en las keys
import moment from 'moment';
import { DateRangePicker } from 'react-dates'; // Importaciones para el picker de las fechas
import 'react-dates/lib/css/_datepicker.css' // Importacion del CSS
import obtenerComprasVisibles from '../../selectores/selectorCompras';
import json2scv from 'json2csv'; // Importacion para convertir los objetos de JSON en csv's
import FileSaver from 'file-saver';
import numeral from 'numeral';
import sumaPrecioCompras from '../../selectores/manejaSumarCompras';

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

    // Metodo que se encarga de exportar a excel el resultado
    manejaExportarExcel = () => {
        const fields = [
            '_id',
            'precio',
            'descripcion',
            'proveedor',
            'modoPago',
            'iva',
            'fecha',
            'idCompra',
            'tipoEgreso',
            'unidadPresentacion',
            'usoDestino'
        ]
        
        const queryExportar = obtenerComprasVisibles(this.props.compras, this.state.filtroTextoCompras, '','',
        this.state.fechaInicial,this.state.fechaFinal); 
        // Tranformar a CSV
        const datosCSV = json2scv({ data: queryExportar, fields: fields });

        // Metodos para que el usuario baje el archivo a su pc
        const blob = new Blob([datosCSV], {type: 'text/plain;charset=utf-8'});
        FileSaver.saveAs(blob, 'datosConsulta.csv');
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
                        <div>
                            Total Compras Mostradas:
                            <strong>{numeral(sumaPrecioCompras(obtenerComprasVisibles(this.props.compras, this.state.filtroTextoCompras,'','',
                                this.state.fechaInicial, this.state.fechaFinal))).format('$0,0.[00]')} </strong>                             
                        </div>
                        <div>
                            (Efectivo):
                            <strong>
                                {
                                    numeral(sumaPrecioCompras(obtenerComprasVisibles(this.props.compras, this.state.filtroTextoCompras,'',
                                    'efectivo',this.state.fechaInicial,this.state.fechaFinal))).format('$0,0.[00]')
                                }
                            </strong>
                        </div>
                        <div>
                            (Tarjeta):
                            <strong>
                                {
                                    numeral(sumaPrecioCompras(obtenerComprasVisibles(this.props.compras, this.state.filtroTextoCompras,'',
                                    'tarjeta',this.state.fechaInicial,this.state.fechaFinal))).format('$0,0.[00]')
                                }
                            </strong>
                        </div>
                        <div>
                            (Transferencia):
                            <strong>
                                {
                                    numeral(sumaPrecioCompras(obtenerComprasVisibles(this.props.compras, this.state.filtroTextoCompras,'',
                                    'transferencia',this.state.fechaInicial,this.state.fechaFinal))).format('$0,0.[00]')
                                }
                            </strong>
                        </div>
                        <div>
                            (Traspaso Caja a Sobre):
                            <strong>
                                {
                                    numeral(sumaPrecioCompras(obtenerComprasVisibles(this.props.compras, this.state.filtroTextoCompras,'',
                                    'traspasoSobre',this.state.fechaInicial,this.state.fechaFinal))).format('$0,0.[00]')
                                }
                            </strong>                            
                        </div>
                        <div>
                            (Traspaso Sobre a Caja):
                            <strong>
                                {
                                    numeral(sumaPrecioCompras(obtenerComprasVisibles(this.props.compras, this.state.filtroTextoCompras,'',
                                    'traspasoCaja',this.state.fechaInicial,this.state.fechaFinal))).format('$0,0.[00]')
                                }
                            </strong>                            
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
                                    currentCompraCantidad    = {elemento.cantidad}
                                    manejaEditarCompra       = {this.props.manejaEditarCompra}
                                />
                            })}
                        </ul>

                        <button 
                            className ='btn btn-lg btn-success'
                            onClick   = {this.manejaExportarExcel}
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
