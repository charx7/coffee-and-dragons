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
import { connect } from 'react-redux'; // Importacion para acceder al almacen de redux

class DashboardPagina extends React.Component {
    state = {
        tareaActiva: 'ventas'
    };

    manejaTareaActiva = (menuSeleccion) =>{
        switch (menuSeleccion) {
            case 'VENTAS':
                this.setState((estadoAnterior) => {
                    return({
                        tareaActiva: 'ventas'
                    })
                });
            return;
            case 'HISTORICO': 
                this.setState(() => {
                    return ({
                        tareaActiva: 'historico'
                    })
                });
            return;
            case 'PRODUCTOS':
                this.setState(() => {
                    return ({
                        tareaActiva: 'productos'
                    })
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