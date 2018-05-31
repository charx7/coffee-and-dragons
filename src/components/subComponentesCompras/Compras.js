import React from 'react';
import ReactDom from 'react-dom';
import ListaEgresos from './ListaEgresos';
import carritoDeCompras from './CarritoDeCompras';
import CarritoDeCompras from './CarritoDeCompras';
import ReciboDeCompras from './ReciboDeCompras';
import { connect } from 'react-redux';
import { empiezaNuevaCompra } from '../../acciones/compras';

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

    // Manejador de suma de los precios segun los items en el recibo
    manejaSumaPrecioEgresos = () => {
        let precioTotal = 0;
        this.state.carritoDeCompras.map((elemento) => {
            let precioProducto = this.props.egresos.find((elementoInterno) => {
                return elementoInterno._id == elemento;
            });
            //console.log(precioProducto);
            precioTotal = precioTotal + precioProducto.precio;
        });
        return precioTotal;
    }

    // Manejador de liquidacion del carrito de compras
    manejaLiquidarCarrito = (modoPago, fecha) => {
        let arregloDatosCompras = [];
        this.state.carritoDeCompras.map((elemento) => {
            let datosCompra = this.props.egresos.find((elementoInterno) => {
                return elementoInterno._id == elemento;
            });
            // Lo agregamos al arreglo
            arregloDatosCompras = [
                ...arregloDatosCompras,
                datosCompra
            ]
        });
        // Verificamos que no esta vacio el arreglo
        if(arregloDatosCompras.length < 1) alert('No se puede liquidar una cuenta vacia');
        console.log(arregloDatosCompras);
        arregloDatosCompras.map((elemento) => {
            let compraToAniadir = {
                idCompra:           elemento._id,           
                precio:             elemento.precio,
                descripcion:        elemento.descripcion,
                iva:                elemento.iva,
                proveedor:          elemento.proveedor,
                tipoEgreso:         elemento.tipoEgreso,
                unidadPresentacion: elemento.unidadPresentacion,
                usoDestino:         elemento.usoDestino,
                modoPago: modoPago,
                fecha: fecha,
            }
            console.log('Va a liquidar la/las compras: ', compraToAniadir);
            this.props.dispatch(empiezaNuevaCompra(compraToAniadir));
            // Reseteo del carrito de compras
            this.manejaVaciarCarritoDeCompras();
                    
        });
    }

    manejaVaciarCarritoDeCompras = () => {
        // Hacemos un push al estado con un conjunto vacio
        this.setState((prevState) => {
            return {
                carritoDeCompras: []
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
                            <ReciboDeCompras
                                carritoDeCompras         = {this.state.carritoDeCompras}
                                manejaSumaPreciosEgresos = {this.manejaSumaPrecioEgresos}
                                manejaLiquidarCarrito    = {this.manejaLiquidarCarrito}
                                manejaVaciarCarrito      = {this.manejaVaciarCarritoDeCompras}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapeoEstadoToProps = (estado, props) => {
    return {
        // Pasamos el nombre de producto como un prop cuando lo encontramos en el estado
        egresos: estado.egresos
    };
};

export default connect(mapeoEstadoToProps)(Compras);
