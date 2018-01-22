import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import ListaProductos from './ListaProductos';
import { agregarProducto } from '../../acciones/productos';

class Productos extends React.Component {
    state = {
        datos: {},
        actualizo: false
    }

    cargarProductosDelServidor = () => {
        axios.get('/api/productos')
        .then( respuesta => {
            console.log(respuesta.data);
            this.props.dispatch(agregarProducto(respuesta.data));
            this.setState({ datos: respuesta.data })
        })
        .catch( (error)=>{
            console.log(error);
        });
    };

    componentDidMount () {
        console.log('Empezo a hacer la request de productos de la BDD');
        // Llama al metodo que carga los datos del servidor
        this.cargarProductosDelServidor();
        console.log('Los datos del servidor son: ',this.state.datos);
    }

    render() {
        return (
            <div className='col-md-9'>
                {/* Importaciones del componente de lista de productos */}
                <ListaProductos/>
            </div>
        )
    }
}

export default connect()(Productos);