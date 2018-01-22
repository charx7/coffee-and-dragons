import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class ListaProductos extends React.Component {
    state = {
        datos: undefined
    }

    render() {
        return (    
            <div className='row'>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        Lista de Productos
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
                        <h3>Productos Disponibles</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListaProductos;