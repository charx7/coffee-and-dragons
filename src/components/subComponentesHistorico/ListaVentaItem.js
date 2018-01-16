import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

class ListaVentaItem extends React.Component {
    
    state = {
        datos: undefined
    }

    render() {
        return (
            <li className='list-group-item' id='li-producto'>
                <a href="#">
                    {this.props.currentDescripcion}
                </a>
                <p id= 'boton-en-lista'>
                    <strong>
                        {numeral(this.props.currentPrecio).format('$0,0.[00]')}
                    </strong>
                </p>
            </li>
        )
    }
}

export default ListaVentaItem;