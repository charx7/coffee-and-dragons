import React from 'react';
import { connect } from 'react-redux';
import { agregarCuenta } from '../acciones/cuentas';

// Componente de clase
class NuevaCuenta extends React.Component {
    render () {
        return (
            <div 
                className='col-md-3'
                // Funcion que agrega una mesa al almacen
                onClick= {() => {
                    console.log(this.props.cuentas)
                    // Saca el numero de lementos en el arreglo de Cuentas y le suma uno
                    let numeroId = this.props.cuentas.length + 1;
                    // Agrega una cuenta mas al almacen con id de longitud + 1
                    this.props.dispatch(agregarCuenta({ id: numeroId, activa: false }));
                }}
            > 
                    <div className="well" id='falseCuentaActiva'>
                        <h2>
                            <i className="fa fa-user-plus" aria-hidden="true"></i> Nueva Cuenta 
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


export default connect(mapeoEstadoAProps) (NuevaCuenta);