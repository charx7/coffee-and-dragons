import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import axios from 'axios';

class EditarProducto extends React.Component {
    manejaEliminarVenta = () => {
        alert('AuchXD');
        // Accion de dispatch un query de delete
    }

    render() {
        return (
            <div className="row">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        Detalles del producto {
                    
                        }
                    </div>
                    <div className="panel-body">
                        <form action="/algo" method='PUT'>
                            <div className='form-group'>
                                <input className='form-control' type="text" placeholder='Descripcion'
                                    value = {this.props.currentProducto.descripcion}
                                />
                            </div>
                            <div className='form-group'>
                                <input className='form-control' type="text" placeholder='Precio'
                                    value = {this.props.currentProducto.precio}
                                />
                            </div>
                            <div className='form-group'>
                                <input className='form-control' type="text" placeholder='URL Imagen'
                                    value = {this.props.currentProducto.imagen}
                                />
                            </div>
                            <div className='form-group'>
                                <input className='form-control' type="text" placeholder='Categoria'
                                    value = {this.props.currentProducto.categoria}
                                />
                            </div>
                            <div className='form-group'>
                                <input className="btn btn-lg btn-primary btn-block" type="submit" value="Guardar"/>
                            </div>
                        </form> 
                        <button 
                            className='btn btn-danger btn-lg btn-block'
                            onClick={() => {
                                this.manejaEliminarVenta();
                            }}
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditarProducto;