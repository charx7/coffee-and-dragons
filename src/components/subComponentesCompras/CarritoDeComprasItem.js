import React from 'react';
import { connect } from 'react-redux';

class CarritoDeComprasItem extends React.Component {
    
    // Llamado a la funcion de quitar con el id del egreso en el que estamos
    empiezaQuitarEgreso = () => {
        this.props.manejaQuitarEgreso(this.props.currentEgreso._id);
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
                <span id = 'precio-en-lista'>
                    {' $'}{this.props.currentEgreso.precio}
                </span>
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
