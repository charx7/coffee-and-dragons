import React from 'react';
import Caja from './Caja';
import Sobre from './Sobre';
import moment from 'moment';
import { connect } from 'react-redux';
import obtenerComprasVisibles from '../../selectores/selectorCompras';
import obtenerVentasVisibles from '../../selectores/selectorVentas';

class Saldos extends React.Component {
    render () {
        return (
        <div className = 'row'>
            <div className="panel panel-default">
                <div className="panel-heading">
                    Saldos
                </div>
                <div className="panel-body">
                    <h3>
                        <strong>
                            Saldos Pertenecientes a: {moment(this.props.currentFecha).format('MMM Do. YYYY')}
                        </strong>
                    </h3>
                    <div className='row'>    
                        <div className='col-md-6'>
                            <Caja
                                nombreUsuario       = {this.props.nombreUsuario}
                                currentArqueo       = {this.props.currentArqueo}
                                currentFecha        = {this.props.currentFecha}
                                manejaGuardarSaldos = {this.props.manejaGuardarSaldos}
                                compras         = {obtenerComprasVisibles(this.props.compras,'','','',this.props.currentFechaFiltro,this.props.currentFechaFiltro)}
                                comprasTarjeta  = {
                                     obtenerComprasVisibles(this.props.compras,'','',
                                    'tarjeta',this.props.currentFechaFiltro, this.props.currentFechaFiltro)
                                }
                                comprasEfectivo = {
                                    obtenerComprasVisibles(this.props.compras,'','',
                                    'efectivo', this.props.currentFechaFiltro, this.props.currentFechaFiltro)
                                }
                                comprasTransferencia = {
                                    obtenerComprasVisibles(this.props.compras,'','',
                                    'transferencia', this.props.currentFechaFiltro, this.props.currentFechaFiltro)
                                }
                                comprasTraspasoSobre = {
                                    obtenerComprasVisibles(this.props.compras,'','',
                                    'traspasoSobre', this.props.currentFechaFiltro, this.props.currentFechaFiltro)
                                }
                                ventas          = {obtenerVentasVisibles(this.props.ventas,'','','',this.props.currentFechaFiltro,this.props.currentFechaFiltro)}
                                ventasTarjeta   = {
                                    obtenerVentasVisibles(this.props.ventas,'','',
                                    'tarjeta',this.props.currentFechaFiltro, this.props.currentFechaFiltro)
                                }
                                ventasEfectivo  = {
                                    obtenerVentasVisibles(this.props.ventas,'','',
                                    'efectivo',this.props.currentFechaFiltro, this.props.currentFechaFiltro)
                                }
                                cajaInicial = {
                                    this.props.currentArqueo.denom500 * 500 +
                                    this.props.currentArqueo.denom200 * 200 +
                                    this.props.currentArqueo.denom100 * 100 +
                                    this.props.currentArqueo.denom50  * 50  +
                                    this.props.currentArqueo.denom20  * 20  +
                                    this.props.currentArqueo.denom10  * 10  +
                                    this.props.currentArqueo.denom5   * 5   +
                                    this.props.currentArqueo.denom2   * 2   +
                                    this.props.currentArqueo.denom1   * 1   +
                                    this.props.currentArqueo.denomPunto5 * .5      
                                }
                                cajaFinal = {
                                    this.props.currentArqueoSiguiente.denom500 * 500 +
                                    this.props.currentArqueoSiguiente.denom200 * 200 +
                                    this.props.currentArqueoSiguiente.denom100 * 100 +
                                    this.props.currentArqueoSiguiente.denom50  * 50  +
                                    this.props.currentArqueoSiguiente.denom20  * 20  +
                                    this.props.currentArqueoSiguiente.denom10  * 10  +
                                    this.props.currentArqueoSiguiente.denom5   * 5   +
                                    this.props.currentArqueoSiguiente.denom2   * 2   +
                                    this.props.currentArqueoSiguiente.denom1   * 1   +
                                    this.props.currentArqueoSiguiente.denomPunto5 * .5
                                }
                            />
                        </div>
                        <div className = 'col-md-6'>
                            <Sobre/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

const mapeoEstadoToProps = (estado, props)=> {
    return {
        // Accedemos a las compras y ventas guardadas en el almacen
        ventas:  estado.ventas,
        compras: estado.compras
    }
}

export default connect(mapeoEstadoToProps) (Saldos);
