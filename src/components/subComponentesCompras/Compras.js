import React from 'react';
import ReactDom from 'react-dom';
import ListaEgresos from './ListaEgresos';
import carritoDeCompras from './CarritoDeCompras';
import CarritoDeCompras from './CarritoDeCompras';
import ReciboDeCompras from './ReciboDeCompras';

class Compras extends  React.Component {
    state = {
        carritoDeCompras: []
    }

    // Manejador de agregar un Egreso
    manejaAgregarEgreso = (idToAgregar) => {
        this.setState((prevState) => {
            return {
                carritoDeCompras: [
                    ...prevState.carritoDeCompras,
                    // Este deberia ser el ID del egreso a aniadir
                    idToAgregar
                ]
            };
        });
    } 

    // Metodo para quitar un egreso del carrito de compras
    manejaQuitarEgreso = (idToQuitar) => {
        // Sacamos el elemento que vamos a quitar del arreglo de los props
        const elementoQuitar = idToQuitar;
        // Definimos cual es el arreglo al que le vamos a hacer las modificaciones
        const listaEgresosActual = this.state.carritoDeCompras;
        // Obtenemos el indice de donde esta la primera instancia de ese elemento con .indexOf
        const indiceElementoARemover = listaEgresosActual.indexOf(elementoQuitar);
        // Condicion que entra si el indice existe
        if( indiceElementoARemover > -1 ) {
            // Quitamos el elemento del arreglo en el indice
            listaEgresosActual.splice(indiceElementoARemover, 1)
        }
        // Hacemos un push al estado con el arreglo de idProductos modificado (ya no existe
        this.setState((prevState) => {
            return {
                carritoDeCompras: listaEgresosActual
            };
        });
    }

    render() {
        return (
            <div className ='col-md-9'>
                <div className ="row">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Lista de egresos
                        </div>
                        <div className="panel-body">
                            <ListaEgresos
                                manejaAgregarEgreso = {this.manejaAgregarEgreso}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Carrito de Compras <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                        </div>
                        <div className="panel-body">
                            {/* Rendereo del carrito de compras */}
                            <CarritoDeCompras
                                carritoDeCompras   = {this.state.carritoDeCompras}
                                manejaQuitarEgreso = {this.manejaQuitarEgreso}
                            />
                            <ReciboDeCompras/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Compras
