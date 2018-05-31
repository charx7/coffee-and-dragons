import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

class ListaComprasItem extends React.Component {
    render () {
        return (
            <li className='list-group-item' id='li-producto'>
                <Link to="#">
                    {this.props.currentCompraDescripcion}
                </Link>
            <p id= 'boton-en-lista'>
                <strong>
                    {numeral(this.props.currentCompraPrecio).format('$0,0.[00]')}
                </strong>
            </p>
        </li>
        )
    }
}

export default ListaComprasItem;
