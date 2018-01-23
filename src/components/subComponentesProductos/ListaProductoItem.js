import React from 'react';

class ListaProductoItem extends React.Component {
    render() {
        return(
            <div className='col-md-2'>
                <div className='thumbnail'>
                    <img src={this.props.currentImagen} 
                        className='img-thumbnail' 
                        alt=" Producto C&D"
                    />
                    <p>{this.props.currentDescripcion}</p>
                    <p>Precio: MXN {this.props.currentPrecio}</p>
                </div>
            </div>
        )
    }
}

export default ListaProductoItem;