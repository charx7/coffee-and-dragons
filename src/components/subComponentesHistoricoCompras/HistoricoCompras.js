import React from 'react';
import ReactDom from 'react-dom';
import ListaCompras from './ListaCompras';
import { connect } from 'react-redux';

class HistoricoCompras extends  React.Component {
    
    render() {
        return (
            <div className = 'col-md-9'>
                <ListaCompras 
                    compras = {this.props.compras}
                />
            </div>
        )
    }
}

const mapeoEstadoToProps = (estado, props) => {
    return {
        // Mandamos como prop las compras que estan en el almacen
        compras: estado.compras
    }
}

export default connect(mapeoEstadoToProps) (HistoricoCompras);
