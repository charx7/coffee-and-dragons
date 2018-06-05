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
                                compras = {obtenerComprasVisibles(this.props.compras,'','','',this.props.currentFechaFiltro,this.props.currentFechaFiltro)}
                                ventas  = {obtenerVentasVisibles(this.props.ventas,'','','',this.props.currentFechaFiltro,this.props.currentFechaFiltro)}
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
