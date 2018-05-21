import React from 'react';
import { Link } from 'react-router-dom';

class ListaEgresosItem extends React.Component {
    render () {
        return(
            <div className='col-md-2'>
                <div className='thumbnail' id='contenedorThumbnailCatalogo'>
                    <img src={''} 
                        className='img-thumbnail' 
                        alt= "Producto C&D"
                        id= 'imagenProductoCatalogo'
                    />
                    <p id = 'contenedorDescripcionCatalogo'>
                        <Link to="#">
                            {'Una descripcion simple'}
                        </Link>
                    </p>
                    <p>
                        <strong>{'Categoria'}</strong>                        
                    </p>
                    <p> Precio: MXN {'100'}</p>
                </div>
            </div>
        )
    }
}

export default ListaEgresosItem;