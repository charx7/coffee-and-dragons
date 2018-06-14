import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import { mostrarVenta } from '../../acciones/ventas';

class ListaVentaItem extends React.Component {
    
    render() {
        return (
            <li className='list-group-item' id='li-producto'>
                <Link to="#" onClick={() => {this.props.manejaEditarVenta(this.props.currentID)}}>
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
