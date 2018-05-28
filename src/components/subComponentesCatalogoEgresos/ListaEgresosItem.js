import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ListaEgresosItem extends React.Component {
    // Metodos que vamos a pasar en los links y hacer query a la BDD de un egreso especifico 
    manejaEditarDatos = (respuestaQuery) => {
        this.props.manejaEgresoSeleccionado(respuestaQuery);
    }

    manejaClickEnEgreso = (currentIdEgreso) => {
        // Accion de dispatch un query de buscar un el currentIdProducto
        axios.get(`/api/egresos/${currentIdEgreso}`)
        .then((respuesta) => {
            console.log(respuesta.data);
            this.manejaEditarDatos(respuesta.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render () {
        return(
            <div className='col-md-2'>
                <div className='thumbnail' id='contenedorThumbnailEgreso'>
                    <img src={this.props.currentImagen} 
                        className='img-thumbnail' 
                        alt= "Egreso C&D"
                        id= 'imagenProductoCatalogo'
                    />
                    <p id = 'contenedorDescripcionCatalogo'>
                        <Link to="#" onClick = { () => {this.manejaClickEnEgreso(this.props.currentIdEgreso)}} >
                            {this.props.currentDescripcion}
                        </Link>
                    </p>
                    <p>
                        <strong> Proveedor: </strong> {this.props.currentProveedor}                     
                    </p>
                    <p> 
                        <strong> Precio: </strong> MXN {this.props.currentPrecio}
                    </p>
                    <p>
                        <strong> Unidad Presentacion: </strong> {this.props.currentUnidadPresentacion}
                    </p>
                    <p>
                        <strong> Uso Destino: </strong> {this.props.currentUsoDestino}
                    </p>
                    <p>
                        <strong> Tipo Egreso: </strong>  {this.props.currentTipoEgreso}
                    </p>
                    <p>
                        <strong> Cantidad IVA: </strong> {this.props.currentIva}
                    </p>
                </div>
            </div>
        )
    }
}

export default ListaEgresosItem;