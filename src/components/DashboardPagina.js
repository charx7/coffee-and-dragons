// Importaciones de React
import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import TituloDashboard from './TituloDashboard'; // Componente del titulo del dashboard
import MenuLateral from './MenuLateral'; // Componente del Menu lateral
import ComponenteVentas from './ComponenteVentas'; // Componente del Menu del POS
// Prueba
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
            default:
                return;
        }
    } 

    render() {
        return(
            <div>
                {/* Importacion del titulo del dashboard */}
                <TituloDashboard/>
                <div className="container">
                    <div className="row">
                        {/* Importacion del Componente de Menu lateral */}
                        <MenuLateral
                            currentTareaActiva = {this.state.tareaActiva}
                            manejaTareaActiva  = {this.manejaTareaActiva}
                        />
                        {/* Importacion del Componente de Ventas POS 
                        Nota: Aca deberia ir un switch que cambie segun lo que
                        el usuario haya seleccionado en el menu lateral TODO*/}
                        <ComponenteVentas/>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardPagina;