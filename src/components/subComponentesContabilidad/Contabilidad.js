import React from 'react';
import Arqueo from './Arqueo';
import Saldos from './Saldos';
import moment from 'moment';


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
                    nombreUsuario = {this.props.nombreUsuario}
                    manejaCambioFechaEnPadre = {this.manejaCambioFechaEnPadre}
                />    
                <Saldos
                    currentFecha = {this.state.currentFecha.valueOf()}
                    
                />
            </div>
        )
    }
}

export default Contabilidad;
