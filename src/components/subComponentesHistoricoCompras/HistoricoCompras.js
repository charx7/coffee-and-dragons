import React from 'react';
import ReactDom from 'react-dom';
import ListaCompras from './ListaCompras';

class HistoricoCompras extends  React.Component {
    
    render() {
        return (
            <div className = 'col-md-9'>
                <ListaCompras/>
            </div>
        )
    }
}

export default HistoricoCompras
