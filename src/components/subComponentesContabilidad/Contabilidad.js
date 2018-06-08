import React from 'react';
import Arqueo from './Arqueo';
import Saldos from './Saldos';
import moment from 'moment';
import { connect } from 'react-redux';

class Contabilidad extends React.Component {
    
    state = {
        currentFecha: moment()
    }

    manejaCambioFechaEnPadre = (fechaToCambiar) => {
        let currentFecha = fechaToCambiar;
        this.setState({
            currentFecha: fechaToCambiar
        });
    }

    render() {
        return (
            <div className = 'col-md-9'>
                <Arqueo 
                    nombreUsuario            = {this.props.nombreUsuario}
                    manejaCambioFechaEnPadre = {this.manejaCambioFechaEnPadre}
                    arqueos                  = {this.props.arqueos}
                />    
                <Saldos
                    currentFecha       = {this.state.currentFecha.valueOf()}
                    currentFechaFiltro = {this.state.currentFecha}
                />
            </div>
        )
    }
}

// Funcion que se encarga de hacer las conexiones de estado a los props que se pasaran 
const mapeoEstadoToProps = (estado, props) => {
    return {
        // Pasa un prop al componente basado en el mapeo del almacen 
        arqueos: estado.arqueos
    }
}; 

export default connect(mapeoEstadoToProps) (Contabilidad);
