import React from 'react';
import ListaEgresos from './ListaEgresos';

class CatalogoEgresos extends  React.Component {
    
    render() {
        return (
            <div className = 'col-md-9'>
                {/* Importamos la lista de Egresos*/}
                <ListaEgresos/>
            </div>
        )
    }
}

export default CatalogoEgresos
