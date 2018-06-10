import React from 'react';
import Arqueo from './Arqueo';
import Saldos from './Saldos';
import moment from 'moment';
import { connect } from 'react-redux';
import { empiezaEditarArqueo,
         empiezaNuevoArqueo } from '../../acciones/arqueos';

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

    manejaGuardarArqueo = (id,fecha, nuevasCaracteristicas) => {
        if(!id) {
            // Entonces estamos agregando un nuevo arqueo
            console.log('Se esta salvando un nuevo arqueo a la BDD');
            // Aniadimos la fecha como nuevo objeto
            let nuevoRegistro = { 
                ...nuevasCaracteristicas,
                ...fecha
            };
            // Mandamos una accion de crear un nuevo arqueo a la BDD y al almacen de Redux
            this.props.dispatch(empiezaNuevoArqueo(nuevoRegistro));

        } else {
            console.log('Se esta editando un arqueo existente');
            // Entonces es un update de un arqueo especifico
            this.props.dispatch(empiezaEditarArqueo(id, nuevasCaracteristicas));
        }
    }

    render() {
        return (
            <div className = 'col-md-9'>
                <Arqueo 
                    nombreUsuario            = {this.props.nombreUsuario}
                    manejaCambioFechaEnPadre = {this.manejaCambioFechaEnPadre}
                    arqueos                  = {this.props.arqueos}
                    manejaGuardarArqueo       = {this.manejaGuardarArqueo}
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
