import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ListaVentas from './ListaVentas';
import EditarVenta from './EditarVenta';

class Historico extends React.Component {
    // Estado inicial vacio
    state = {
        datos: {},
        actualizo: false
    }
    
    // Metodo que le indica al componente que se actualizo la lista de las ventas y le pasa
    // un prop a la ListaVentas para que llame al metodo que hace reQuery a la BDD
    actualizaComponente = () => {
        console.log('Se marco una actulizacion del la BDD');
        this.setState({
            actualizo: true
        });
    }

    render() {
        return (
            <div className='col-md-9'>
                {/* Importacion del componente de lista de ventas*/}
                <ListaVentas
                    actualizo = {this.state.actualizo}
                />
                {/* Importacion del componente que edita una venta*/}
                <EditarVenta 
                    actualizaComponente = {this.actualizaComponente}
                />
            </div>
        )
    }
}

export default Historico;