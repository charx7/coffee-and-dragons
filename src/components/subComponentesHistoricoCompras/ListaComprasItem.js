import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

class ListaComprasItem extends React.Component {

    // Funcion que llama a la del componente padre
    empiezaManejaEditarCompra = () => {
        // Llamamos al show
        this.props.manejaEditarCompra(this.props.currentCompraId);
    }

    render () {
        return (
            <li className='list-group-item' id='li-producto'>
                <Link 
                    to      ="#"
                    onClick = {this.empiezaManejaEditarCompra}
                >
                    {this.props.currentCompraDescripcion}
                </Link>
            <p id= 'boton-en-lista'>
                <strong>
                    {
                        this.props.currentCompraCantidad 
                            ? numeral(this.props.currentCompraCantidad * this.props.currentCompraPrecio).format('$0.0.[00]')
                            : numeral(this.props.currentCompraPrecio).format('$0,0.[00]')
                    }
                </strong>
            </p>
        </li>
        )
    }
}

export default ListaComprasItem;
