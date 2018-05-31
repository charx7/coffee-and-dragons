import React from 'react';
import ListaComprasItem from "./ListaComprasItem";
import uuid from 'uuid'; // Para generar los id que van a ir en las keys

class ListaCompras extends React.Component {
    render () {
        return (
            <div className = 'row'>
                <div className = 'panel panel-default'>
                    <div className = 'panel-heading'>
                        Lista Compras
                    </div>
                    <div className = 'panel-body'>
                        <div className = 'row'>
                            <div className = 'col-md-6'>
                                <p>
                                    Filtro Nombre Egreso
                                </p>
                                <input 
                                    type="text"
                                />
                            </div>
                            <div className='col-md-6'>
                                <p>Seleccione Periodo Para Desplegar:</p>
                            </div>

                        </div>
                        <p>
                            Cargando Compras...
                        </p>
                        <h3>
                            Lista Compras
                        </h3>
                        <ul className = 'list-group'>
                            {this.props.compras.map((elemento) => {
                                return <ListaComprasItem
                                    key                      = {uuid()}
                                    currentCompraId          = {elemento._id}
                                    currentCompraDescripcion = {elemento.descripcion}
                                    currentCompraPrecio      = {elemento.precio}
                                />
                            })}
                        </ul>

                        <button 
                            className ='btn btn-lg btn-success'
                        >
                                Exportar a Excel
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListaCompras;