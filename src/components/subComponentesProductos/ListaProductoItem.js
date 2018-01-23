import React from 'react';
import { Link } from 'react-router-dom';
import { empiezaSetMostrarProducto } from '../../acciones/productos';
import { connect } from 'react-redux';
import axios from 'axios';

class ListaProductoItem extends React.Component {
    
    manejaEditarDatos = (respuestaQuery) => {
        this.props.manejaProductoSeleccionado(respuestaQuery);
    }

    manejaClickEnProducto = (currentIdProducto) => {
        // Accion de dispatch un query de buscar un el currentIdProducto
        axios.get(`/api/productos/${currentIdProducto}`)
        .then((respuesta) => {
            console.log(respuesta.data);
            this.manejaEditarDatos(respuesta.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        return(
            <div className='col-md-2'>
                <div className='thumbnail'>
                    <img src={this.props.currentImagen} 
                        className='img-thumbnail' 
                        alt=" Producto C&D"
                    />
                    <Link to="#" onClick={() => {this.manejaClickEnProducto(this.props.currentIdProducto)}}>
                        {this.props.currentDescripcion}
                    </Link>
                    <p>
                        <strong>{this.props.currentCategoria}</strong>                        
                    </p>
                    <p>Precio: MXN {this.props.currentPrecio}</p>
                </div>
            </div>
        )
    }
}

export default connect()(ListaProductoItem);