import React from 'react';
import { connect } from 'react-redux';

class CarritoDeComprasItem extends React.Component {
    
    state = {
        cantidad: 1
    }

    // Llamado a la funcion de quitar con el id del egreso en el que estamos
    empiezaQuitarEgreso = () => {
        this.props.manejaQuitarEgreso(this.props.uuid);
    }

    manejaCambioCantidadCompra = (e) => {
        const cadenaCantidad = e.target.value;
        if(!cadenaCantidad || cadenaCantidad.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState({ cantidad: cadenaCantidad })
            // Ahora agregamos la cantidad al carrito de compras segun sea el uuid del elemento que estamos modificando
            this.props.manejaAgregarCantidadCarrito(this.props.currentEgreso._id, Number(cadenaCantidad), this.props.uuid)    
        }        
    }

    render() {
        return(
            <li className='list-group-item' id='li-producto'>
                <button 
                    className ='btn btn-xs btn-danger float-right'
                    id        = 'boton-en-lista'
                    onClick   = {this.empiezaQuitarEgreso} 
                >   
                    Remover
                </button>
        
                {/* Codigo que despliega las caracteristicas del producto!  props.currentIdProducto*/} 
                {this.props.currentEgreso.descripcion}

                <span id = 'precio-en-lista-2'>
                    <strong>{' $'}{this.props.currentEgreso.precio}</strong>    
                </span>
                <p>
                    {'Unidad: '}<strong>{this.props.currentEgreso.unidadPresentacion}</strong>
                </p>
                <p>{' Cantidad: '} 
                    <input 
                        type="text" 
                        maxLength = '5' 
                        size = '4'
                        value = {this.state.cantidad}
                        onChange = {this.manejaCambioCantidadCompra}
                    />
                </p>    
            </li>
        )
    }
}

const mapeoEstadoToProps = (estado, props) => {
    return {
        // Pasamos el nombre de producto como un prop cuando lo encontramos en el estado
        currentEgreso: estado.egresos.find((elemento) => {
            return elemento._id == props.currentIdEgreso;
        })
    };
};

export default connect(mapeoEstadoToProps)(CarritoDeComprasItem);
