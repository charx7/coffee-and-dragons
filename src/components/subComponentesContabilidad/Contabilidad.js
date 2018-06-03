import React from 'react';
import Arqueo from './Arqueo';
import Saldos from './Saldos';

class Contabilidad extends React.Component {
    render() {
        return (
            <div className = 'col-md-9'>
                <Arqueo 
                    nombreUsuario = {this.props.nombreUsuario}
                />    
                <Saldos/>
            </div>
        )
    }
}

export default Contabilidad;
