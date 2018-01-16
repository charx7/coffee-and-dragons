import React from 'react';
import { connect } from 'react-redux';
import ListaVentaItem from './ListaVentaItem';
import axios from 'axios';

class ListaVentas extends React.Component {
    // Definimos estado vacio
    state = {
        datos: undefined
    }

    // Manda una request de asyc al servidor
    cargarVentasDelServidor =  () => {
        axios.get('/api/ventas')
            .then( respuesta => {
                console.log(respuesta.data);
                this.setState({ datos: respuesta.data })
            })
            .catch( (error)=>{
                console.log(error);
            });
    };

    componentDidMount () {
        console.log('Empezo a hacer la request');
        // Llama al metodo que carga los datos del servidor
        this.cargarVentasDelServidor();
        console.log(this.state.datos);
    }

    render() {
        return (
            <div className="col-md-9">
                <div className='row'>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Lista de Ventas
                        </div>
                        <div className="panel-body">
                            <div className='row'>
                                <div className='col-md-6'>
                                    <input type="text" placeholder='Texto para filtrar'/>
                                </div>
                                <div className='col-md-6'>
                                    <p>PlaceHolder Filtro Calendario</p>
                                </div>
                            </div>
                            <h3>Lista de Ventas</h3>
                            <ul className='list-group'>
                                { (this.state.datos === undefined
                                    ? <li>Loading</li> 
                                    : this.state.datos.map((elemento) =>{
                                        return <ListaVentaItem
                                            key={elemento._id}   
                                            currentID          = {elemento._id}
                                            currentPrecio      = {elemento.precio}
                                            currentModoPago    = {elemento.modoPago}
                                            currentComision    = {elemento.comision}
                                            currentFecha       = {elemento.fecha}
                                            currentCategoria   = {elemento.categoria}
                                            currentDescripcion = {elemento.descripcion}
                                        />
                                    }))}
                            </ul>
                            {/* Comentario */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default ListaVentas;