import React from 'react';
import { connect } from 'react-redux';
import { activaCuenta, modificaNombreCuenta } from '../acciones/cuentas';
// Componente funcional de item de mesas
class CuentaItemPagina extends React.Component  {
    
    state = {
        // wellActivo: this.props.currentActivaMesa
        nombre: this.props.cuentas[this.props.currentIdCuenta-1].nombreCuenta
    }

    manejaCambioNombreCuenta = (e) => {
        const nombreCuentaInput = e.target.value;
        // Dispatch al almacen de la accion
        this.props.dispatch(modificaNombreCuenta( this.props.currentIdCuenta, { nombreCuenta: nombreCuentaInput }));
    }

    render() {
        return (
            <div
                className='col-md-3' 
                onClick={() => {
                //alert('Mesa Activada');
                // Activa la clickeada
                this.props.dispatch(activaCuenta( this.props.currentIdCuenta, { activa: true } ));
            }}>
                <div className="well" id={this.props.currentActivaCuenta + 'CuentaActiva'}>
                    <h2>
                        <i className="fa fa-coffee" aria-hidden="true"></i> Cuenta {this.props.currentIdCuenta}
                        {/* Activa: {this.props.currentActivaMesa ? 'si' : 'no' } */} 
                    </h2>
                    <input 
                        type="text" 
                        id='nombre-usuario' 
                        size='16'
                        value    = {this.props.cuentas[this.props.currentIdCuenta-1].nombreCuenta}
                        onChange = {this.manejaCambioNombreCuenta}
                    />
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