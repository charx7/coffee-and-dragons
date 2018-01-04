import React from 'react';
import { connect } from 'react-redux';
import { activaMesa } from '../acciones/mesas';
// Componente funcional de item de mesas
class MesaItemPagina extends React.Component  {
    
    // state = {
    //    wellActivo: this.props.currentActivaMesa
    // }

    render() {
        return (
            <div className='col-md-3' onClick={() => {
                //alert('Mesa Activada');
                // Activa la clickeada
                this.props.dispatch(activaMesa( this.props.currentIdMesa, { activa: true } ));
            }}>
                <div className="well" id={this.props.currentActivaMesa + 'MesaActiva'}>
                    <h2>
                        <i className="fa fa-coffee" aria-hidden="true"></i> Mesa {this.props.currentIdMesa}
                        {/* Activa: {this.props.currentActivaMesa ? 'si' : 'no' } */} 
                    </h2>
                </div>                        
            </div>
        )
    }
}

const mapeoEstadoAProps = (estado) => {
    return {
        mesas: estado.mesas 
    }
}

export default connect(mapeoEstadoAProps)(MesaItemPagina);