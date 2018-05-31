import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

class ListaComprasItem extends React.Component {
    render () {
        return (
            <li className='list-group-item' id='li-producto'>
                <Link to="#">
                    {'Holi soy un egreso'}
                </Link>
            <p id= 'boton-en-lista'>
                <strong>
                    {numeral(100.255).format('$0,0.[00]')}
                </strong>
            </p>
        </li>
        )
    }
}

export default ListaComprasItem;
