import React from 'react';
import ListaEgresos from './ListaEgresos';
import EditarEgresos from './EditarEgresos';

class CatalogoEgresos extends  React.Component {
    
    render() {
        return (
            <div className = 'col-md-9'>
                {/* Importamos la lista de Egresos*/}
                <ListaEgresos/>
                {/* Importaciones del componente que edita el egreso especifico */}
                <EditarEgresos/>
            </div>
        )
    }
}

export default CatalogoEgresos
