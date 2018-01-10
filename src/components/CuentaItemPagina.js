import React from 'react';
import { connect } from 'react-redux';
import { activaCuenta } from '../acciones/cuentas';
// Componente funcional de item de mesas
class CuentaItemPagina extends React.Component  {
    
    // state = {
    //    wellActivo: this.props.currentActivaMesa
    // }

    render() {
        return (
            <div className='col-md-3' onClick={() => {
                //alert('Mesa Activada');
                // Activa la clickeada
                this.props.dispatch(activaCuenta( this.props.currentIdCuenta, { activa: true } ));
            }}>
                <div className="well" id={this.props.currentActivaCuenta + 'MesaActiva'}>
                    <h2>
                        <i className="fa fa-coffee" aria-hidden="true"></i> Cuenta {this.props.currentIdCuenta}
                        {/* Activa: {this.props.currentActivaMesa ? 'si' : 'no' } */} 
                    </h2>
                </div>                        
            </div>
        )
    }
}

const mapeoEstadoAProps = (estado) => {
    return {
        cuentas: estado.cuentas 
    }
}

export default connect(mapeoEstadoAProps)(CuentaItemPagina);