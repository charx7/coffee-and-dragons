import React from 'react';
import ReactDom from 'react-dom';
import ListaCompras from './ListaCompras';
import { connect } from 'react-redux';
import EditarCompra from './EditarCompra';
import axios from 'axios';
import { empiezaEliminarCompra } from '../../acciones/compras';

class HistoricoCompras extends  React.Component {
    
    state = {
        currentCompra: {}
    }

    // Cambiamos el estado con la compra seleccionada
    manejaCompraSeleccionada = (compraToMostrar) => {
        this.setState({
            currentCompra: compraToMostrar
        });
    }
    
    // Hacemos un query a la API de compras
    manejaEditarCompra = (currentIdCompra) => {
        console.log('Se va a editar: ', currentIdCompra);
        axios.get(`/api/compras/${currentIdCompra}`)
        .then((respuesta) => {
            console.log(respuesta.data);
            this.manejaCompraSeleccionada(respuesta.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    manejaElminarVenta = (idToEliminar) => {
        if(!idToEliminar) {
            alert('Debe seleccionar un registro.');
        } else {
            console.log('Se va a eliminar la compra: ', idToEliminar);
            this.props.dispatch(empiezaEliminarCompra(idToEliminar));
            // Una vez que se elimina quitamos la venta seleccionada del estado
            this.setState({
                currentCompra: {}
            });
        }
    }

    render() {
        return (
            <div className = 'col-md-9'>
                <ListaCompras 
                    compras            = {this.props.compras}
                    manejaEditarCompra = {this.manejaEditarCompra} 
                />
                <EditarCompra
                    currentCompra      = {this.state.currentCompra}
                    manejaElminarVenta = {this.manejaElminarVenta}
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
