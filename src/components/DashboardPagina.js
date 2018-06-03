// Importaciones de React
import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import TituloDashboard from './TituloDashboard'; // Componente del titulo del dashboard
import MenuLateral from './MenuLateral'; // Componente del Menu lateral
import ComponenteVentas from './ComponenteVentas'; // Componente del Menu del POS
import Historico from './subComponentesHistorico/Historico'; // Componente del Menu Historico
import Productos from './subComponentesProductos/Productos'; // Componente del Menu de Productos
import CatalogoEgresos from './subComponentesCatalogoEgresos/CatalogoEgresos'; // Componente del Menu de Catalogo de Egresos
import Compras from './subComponentesCompras/Compras'; // Componente del Menu de Compras
import HistoricoCompras from './subComponentesHistoricoCompras/HistoricoCompras'; // Componente del Menu del Historico de Compras
import Contabilidad from './subComponentesContabilidad/Contabilidad'; // Componente del menu de Contabilidad
import { connect } from 'react-redux'; // Importacion para acceder al almacen de redux

class DashboardPagina extends React.Component {
    state = {
        tareaActiva: 'ventas'
    };

    // Uso del Case para renderear el componente al que se le esta dando click del menu lateral
    manejaTareaActiva = (menuSeleccion) => {
        switch (menuSeleccion) {
            case 'VENTAS':
                this.setState((estadoAnterior) => {
                    return({
                        tareaActiva: 'ventas'
                    });
                });
            return;
            case 'HISTORICO': 
                this.setState(() => {
                    return ({
                        tareaActiva: 'historico'
                    });
                });
            return;
            case 'PRODUCTOS':
                this.setState(() => {
                    return ({
                        tareaActiva: 'productos'
                    });
                });
            return;
            case 'CATALOGOEGRESOS':
                this.setState(() => {
                    return({
                        tareaActiva: 'catalogoEgresos'
                    });
                });
            return;
            case 'COMPRAS':
                this.setState(() => {
                    return({
                        tareaActiva: 'compras'
                    });
                });
            return;
            case 'HISTORICOCOMPRAS':
                this.setState(() => {
                    return({
                        tareaActiva: 'historicoCompras'
                    });
                });
            return;
            case 'CONTABILIDAD':
                this.setState(() => {
                    return({
                        tareaActiva: 'contabilidad'
                    });
                });
            return;
            default:
                return;
        }
    } 

    render() {
        return(
            <div>
                {/* Importacion del titulo del dashboard */}
                { console.log('Actualmente esta logeado: ', this.props.authentication.nombre) }
                <TituloDashboard/>
                <div className="container">
                    <div className="row">
                        {/* Importacion del Componente de Menu lateral */}
                        <MenuLateral
                            currentTareaActiva = {this.state.tareaActiva}
                            manejaTareaActiva  = {this.manejaTareaActiva}
                        />
                        {/* Importacion y rendereo del Componente de Ventas POS
                            o de otros Componentes como el historico segun 
                            el estado */}
                        {this.state.tareaActiva == 'ventas' ? <ComponenteVentas/> : '' }
                        {this.state.tareaActiva == 'historico' ? <Historico/>: ''}
                        {this.state.tareaActiva == 'productos' ? <Productos/>: ''}
                        {this.state.tareaActiva == 'catalogoEgresos' ? <CatalogoEgresos/>: ''}
                        {this.state.tareaActiva == 'compras' ? <Compras/>: ''}
                        {this.state.tareaActiva == 'historicoCompras' ? <HistoricoCompras/>: ''}
                        {this.state.tareaActiva == 'contabilidad' ? <Contabilidad/>: ''}
                    </div>
                </div>
            </div>
        )
    }
}

const mapeoEstadoToProps = (estado, props) => {
    return {
        // Pasamos el prop de datos del usuario Logeado o anonimo
        authentication: estado.authentication
    };
}

export default connect(mapeoEstadoToProps)(DashboardPagina);