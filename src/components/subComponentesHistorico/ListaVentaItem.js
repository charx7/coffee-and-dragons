import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import { mostrarVenta } from '../../acciones/ventas';

class ListaVentaItem extends React.Component {
    
    state = {
        datos: undefined
    }

    manejaClickEnVenta = () => {
        this.props.dispatch(mostrarVenta({
            id: this.props.currentID,
            precio: this.props.currentPrecio,
            modoPago: this.props.currentModoPago,    
            comision: this.props.currentComision,    
            fecha: this.props.currentFecha,       
            categoria: this.props.currentCategoria,  
            descripcion: this.props.currentDescripcion 
        }));
    }

    render() {
        return (
            <li className='list-group-item' id='li-producto'>
                <Link to="#" onClick={() => {this.manejaClickEnVenta()}}>
                    {this.props.currentDescripcion}
                </Link>
                <p id= 'boton-en-lista'>
                    <strong>
                        {numeral(this.props.currentPrecio).format('$0,0.[00]')}
                    </strong>
                </p>
            </li>
        )
    }
}

export default connect()(ListaVentaItem);