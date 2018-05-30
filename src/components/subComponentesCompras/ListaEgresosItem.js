import React from 'react';

class ListaEgresosItem extends React.Component {
    manejaEmpiezaAgregarEgreso = () => {
        // Llamado a la funcion que esta heredada en los props
        this.props.manejaAgregarEgreso(this.props.currentIdEgreso);
    }

    render () {
        return (
            <div className='col-md-2'>
                <div className='thumbnail' id='contenedorThumbnailEgreso2'>
                    <img 
                        src       = {this.props.currentImagen} 
                        className = 'img-thumbnail' 
                        alt       = "Egreso C&D"
                        id        = 'imagenProducto'
                    />
                    <p id= 'contenedorDescripcion'>       {this.props.currentDescripcion} </p>
                    <p id= 'contenedorPrecio'>Precio: MXN {this.props.currentPrecio}</p>
                    <p> <strong> {this.props.currentProveedor} </strong> </p>
                    <div id='contenedor-boton-productos'>
                        <button 
                            className  ='btn btn-success' 
                            id         ='boton-productos'
                            onClick    = {this.manejaEmpiezaAgregarEgreso} 
                        >
                            <span className="glyphicon glyphicon-shopping-cart"></span> Agregar 
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}


export default ListaEgresosItem;
