import React from 'react';
import axios from 'axios';
import ListaVentas from './ListaVentas';
import EditarVenta from './EditarVenta';
import { connect } from 'react-redux';
import { empiezaEliminarVenta } from '../../acciones/ventas';

class Historico extends React.Component {
    // Estado inicial vacio
    state = {
        currentVenta: {},
    }
    
    manejaVentaSeleccionada = (ventaToMostrar) => {
        this.setState({
            currentVenta: ventaToMostrar
        });
    }

    // Hacemos un query a la API de compras
    manejaEditarVenta = (currentIdVenta) => {
        console.log('Se va a editar: ', currentIdVenta);
        axios.get(`/api/ventas/${currentIdVenta}`)
        .then((respuesta) => {
            console.log(respuesta.data);
            this.manejaVentaSeleccionada(respuesta.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    manejaEliminarVenta = (idToEliminar) => {
        if(!idToEliminar) {
            alert('Debe seleccionar un registro.');
        } else {
            console.log('Se va a eliminar la venta: ', idToEliminar);
            this.props.dispatch(empiezaEliminarVenta(idToEliminar));
            // Una vez que se elimina quitamos la venta seleccionada del estado
            this.setState({
                currentVenta: {}
            });
        }
    }

    render() {
        return (
            <div className='col-md-9'>
                {/* Importacion del componente de lista de ventas*/}
                <ListaVentas
                    ventas            = {this.props.ventas}
                    manejaEditarVenta = {this.manejaEditarVenta}
                />
                {/* Importacion del componente que edita una venta*/}
                <EditarVenta 
                    currentVenta        = {this.state.currentVenta}
                    manejaEliminarVenta = {this.manejaEliminarVenta}
                />
            </div>
        )
    }
}

const mapeoEstadoToProps = (estado, props) => {
    return {
        // Mandamos como prop las compras que estan en el almacen
        ventas: estado.ventas
    }
}

export default connect(mapeoEstadoToProps)(Historico);
