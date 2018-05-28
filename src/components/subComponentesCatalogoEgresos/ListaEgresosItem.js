import React from 'react';
import { Link } from 'react-router-dom';

class ListaEgresosItem extends React.Component {
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
                        <Link to="#">
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