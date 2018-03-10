import React from 'react';
import { connect } from 'react-redux';
import ListaVentaItem from './ListaVentaItem';
import axios from 'axios';
import obtenerVentasVisibles from './../../selectores/selectorVentas';
import moment from 'moment';
// Importaciones del calendario
import { DateRangePicker } from 'react-dates'; // Importaciones para el picker de las fechas
import 'react-dates/lib/css/_datepicker.css' // Importacion del CSS
// Importaciones de File-saver
import FileSaver from 'file-saver';
import json2scv from 'json2csv'; // Importacion para convertir los objetos de JSON en csv's
import sumaPrecioProductos from './../../selectores/playgroundselector';

class ListaVentas extends React.Component {
    // Definimos estado vacio
    state = {
        datos: undefined,
        filtroTextoVentas: '',
        focusCalendario: null,
        fechaInicial: moment(),
        fechaFinal: moment()
    }

    // Metodo que se encarga de exportar a excel el resultado
    manejaExportarExcel = () => {
        const fields = [
            '_id',
            'descripcion',
            'categoria',
            'precio',
            'modoPago',
            'comision',
            'fecha'
        ]
        
        const queryExportar = obtenerVentasVisibles(this.state.datos, this.state.filtroTextoVentas, '','',
        this.state.fechaInicial,this.state.fechaFinal); 
        // Tranformar a CSV
        const datosCSV = json2scv({ data: queryExportar, fields: fields });

        // Metodos para que el usuario baje el archivo a su pc
        const blob = new Blob([datosCSV], {type: 'text/plain;charset=utf-8'});
        FileSaver.saveAs(blob, 'datosConsulta.csv');
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
    manejaCambioFiltroVentas = (e) => {
        const inputTextoFiltro = e.target.value;
        this.setState({
            filtroTextoVentas: inputTextoFiltro
        });
    }

    // Manda una request de asyc al servidor
    cargarVentasDelServidor =  () => {
        axios.get('/api/ventas')
            .then( respuesta => {
                console.log(respuesta.data);
                this.setState({ datos: respuesta.data })
            })
            .catch( (error)=>{
                console.log(error);
            });
    };

    // Manda a cargar datos cuando hay una actualizacion de los props que recibe
    componentWillReceiveProps = () => {
        this.cargarVentasDelServidor();
        console.log('Entro a actualizar la lista de datos');
    }

    componentDidMount () {
        console.log('Empezo a hacer la request');
        // Llama al metodo que carga los datos del servidor
        this.cargarVentasDelServidor();
        console.log('Los datos del servidor son: ',this.state.datos);
    }

    render() {
        return (            
            <div className='row'>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        Lista de Ventas {this.props.ventaMostrada && this.props.ventaMostrada.id}
                    </div>
                    <div className="panel-body">
                        <div className='row'>
                            <div className='col-md-6'>
                                <p>Filtro Nombre Del Producto</p>
                                <input 
                                    className='form-control' 
                                    type="text"
                                    placeholder={'Texto para filtrar'}
                                    value    = {this.state.filtroTextoVentas}
                                    onChange = {this.manejaCambioFiltroVentas}
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
                        {/* Texto que muestra el total de las ventas por efectivo y por tarjeta */}
                        <p>Total Ventas Mostradas: ${
                            (this.state.datos === undefined || this.state.ventaMostrada
                                ? <p>Loading</p> 
                                : <strong> {sumaPrecioProductos(obtenerVentasVisibles(this.state.datos, this.state.filtroTextoVentas, '','',
                                  this.state.fechaInicial,this.state.fechaFinal))} </strong>
                            )}

                            (Cafeteria) ${
                                (this.state.datos === undefined || this.state.ventaMostrada
                                    ? <p>Loading</p> 
                                    : <strong> {sumaPrecioProductos(obtenerVentasVisibles(this.state.datos, this.state.filtroTextoVentas, 'cafeteria','',
                                      this.state.fechaInicial,this.state.fechaFinal))} </strong>
                            )}

                            (Tienda) ${
                                (this.state.datos === undefined || this.state.ventaMostrada
                                    ? <p>Loading</p> 
                                    : <strong> {sumaPrecioProductos(obtenerVentasVisibles(this.state.datos, this.state.filtroTextoVentas, 'tienda','',
                                      this.state.fechaInicial,this.state.fechaFinal))} </strong>
                            )}
                        </p>

                        <p>Total Ventas Efectivo : ${
                            (this.state.datos === undefined || this.state.ventaMostrada
                                ? <p>Loading</p> 
                                : <strong> {sumaPrecioProductos(obtenerVentasVisibles(this.state.datos, this.state.filtroTextoVentas, '','efectivo',
                                  this.state.fechaInicial,this.state.fechaFinal))} </strong>
                            )}

                            (Cafeteria) : ${
                                (this.state.datos === undefined || this.state.ventaMostrada
                                    ? <p>Loading</p> 
                                    : <strong> {sumaPrecioProductos(obtenerVentasVisibles(this.state.datos, this.state.filtroTextoVentas, 'cafeteria','efectivo',
                                      this.state.fechaInicial,this.state.fechaFinal))} </strong>
                                )}
                            (Tienda) : ${
                                (this.state.datos === undefined || this.state.ventaMostrada
                                    ? <p>Loading</p> 
                                    : <strong> {sumaPrecioProductos(obtenerVentasVisibles(this.state.datos, this.state.filtroTextoVentas, 'tienda','efectivo',
                                        this.state.fechaInicial,this.state.fechaFinal))} </strong>
                                )}
                        </p>

                        <p>Total Ventas Tarjeta : ${
                            (this.state.datos === undefined || this.state.ventaMostrada
                                ? <p>Loading</p> 
                                : <strong>  {sumaPrecioProductos(obtenerVentasVisibles(this.state.datos, this.state.filtroTextoVentas, '','tarjeta',
                                  this.state.fechaInicial,this.state.fechaFinal))} </strong>
                            )}

                            (Cafeteria) : ${
                                (this.state.datos === undefined || this.state.ventaMostrada
                                    ? <p>Loading</p> 
                                    : <strong>  {sumaPrecioProductos(obtenerVentasVisibles(this.state.datos, this.state.filtroTextoVentas, 'cafeteria','tarjeta',
                                      this.state.fechaInicial,this.state.fechaFinal))} </strong>
                                )}
                            (Tienda) : ${
                                (this.state.datos === undefined || this.state.ventaMostrada
                                    ? <p>Loading</p> 
                                    : <strong>  {sumaPrecioProductos(obtenerVentasVisibles(this.state.datos, this.state.filtroTextoVentas, 'tienda','tarjeta',
                                        this.state.fechaInicial,this.state.fechaFinal))} </strong>
                                )}
                        </p>

                        <h3>Lista de Ventas</h3>
                        <ul className='list-group'>
                            {(this.state.datos === undefined || this.state.ventaMostrada
                                ? <li>Loading</li> 
                                : obtenerVentasVisibles(this.state.datos, this.state.filtroTextoVentas, '','',
                                  this.state.fechaInicial,this.state.fechaFinal)
                                  .map((elemento) => {
                                    return <ListaVentaItem
                                        key={elemento._id}   
                                        currentID            = {elemento._id}
                                        currentPrecio        = {elemento.precio}
                                        currentModoPago      = {elemento.modoPago}
                                        currentComision      = {elemento.comision}
                                        currentFecha         = {elemento.fecha}
                                        currentCategoria     = {elemento.categoria}
                                        currentDescripcion   = {elemento.descripcion}
                                    />
                                }))}
                        </ul>
                        {/* Aqui va el boton para exportar a excel la seleccion */}
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


const mapeoEstadoAProps = (estado) => {
    return {
        ventaMostrada: estado.ventas[0]
    }
}

export default connect(mapeoEstadoAProps)(ListaVentas);