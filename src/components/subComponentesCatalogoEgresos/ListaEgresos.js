import React from 'react';
import ListaEgrososItem from './ListaEgresosItem';

class ListaEgresos extends React.Component {
    
    render() {
        return (
            <div className = 'row'>
                <div className = "panel panel-default">
                    <div className = "panel-heading">
                        Lista de Egresos
                    </div>
                
                    <div className = "panel-body">
                        <div className = 'row'>
                            <div className = 'col-md-6'>
                                <input 
                                type="text"
                                placeholder='Texto para filtrar'
                                />
                            </div>
                            <div className='col-md-6'>
                                Seleccione Categoria:
                                {' '}
                                <select>
                                    <option value='sams'>   Sams</option>
                                    <option value='cotsco'>Cotsco</option>
                                    <option value='otro'>    Otro</option>
                                </select>
                            </div>
                        </div>
                        <h3>
                            Lista de Egresos
                        </h3>
                        <div className='row' id='contenedorProductos'>
                            
                            <ListaEgrososItem/>

                            <div className='col-md-2'>
                                <div className='thumbnail'>
                                    <img src='https://cdn0.iconfinder.com/data/icons/cosmo-work/40/document_new-512.png' 
                                        className='img-thumbnail' 
                                        alt=" Producto C&D"
                                        onClick = {this.props.manejaNuevoProducto}
                                    />
                                    <p>
                                        <strong>Nuevo Producto</strong>                        
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListaEgresos
