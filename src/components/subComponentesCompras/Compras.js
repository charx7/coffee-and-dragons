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
    manejaAgregarEgreso = (idToAgregar, uuid) => {
        this.setState((prevState) => {
            return {
                carritoDeCompras: [
                    ...prevState.carritoDeCompras,
                    {
                    // Este deberia ser el ID del egreso a aniadir
                        idEgreso:       idToAgregar,
                        uuid:           uuid,
                        cantidad:       1
                    }
                ]
            };
        });
    } 

    manejaAgregarCantidadCarrito = (idProducto, cantidadProducto, uuid) => {
        console.log('El idProducto es: ', idProducto, ' y la cantidad: ', cantidadProducto, ' el uuid es: ', uuid);
        // let elementoCarritoToModificar = listaComprasActual.find((elemento) => {
        //     return elemento.uuid == uuid;
        // });

        // elementoCarritoToModificar = {
        //     ...elementoCarritoToModificar,
        //     cantidad: cantidadProducto
        // }
        //console.log('El elemento a modificar es: ', elementoCarritoToModificar)

        // Copiamos la lista de productos actual del carrito
        let listaComprasActual = this.state.carritoDeCompras;
        // Declaramos una nueva lista vacia
        let nuevaLista = [];
        // Iteramos sobre todos los elementos
        listaComprasActual.map((elemento) => {
            if(elemento.uuid == uuid) {
                // Si encontramos el mismos uuid
                // Copiamos los elementos sobre los que estamos iterando
                nuevaLista = [
                    ...nuevaLista,
                    //elementoCarritoToModificar (Metodo pasado encontrando primera el elemento a cambiar)
                    // Sobre-escribimos el elemento en el que estamos con la nueva propiedad de cantidad
                    {
                        ...elemento,
                        cantidad: cantidadProducto
                    }
                ];
            } else {
                // Si no encontramos el uuid entonces vamos aniadiendo los elementos
                nuevaLista = [
                    ...nuevaLista,
                    elemento
                ];
            }
        });
        // Cambiamos el estado del carrito de compras a la nueva lista con la propiedad de cantidad modificada
        this.setState({
            carritoDeCompras: nuevaLista
        });
    }

    // Metodo para quitar un egreso del carrito de compras
    manejaQuitarEgreso = (idToQuitar) => {
        // Sacamos el elemento que vamos a quitar del arreglo de los props
        const elementoQuitar = idToQuitar;
        // Definimos cual es el arreglo al que le vamos a hacer las modificaciones
        const carritoDeComprasActual = this.state.carritoDeCompras;
        // Hacemos un metodo de filter para quitar el objeto que tiene el uuid a quitar
        let nuevoCarritoDeCompras = carritoDeComprasActual.filter(({ uuid }) => {
            return uuid != idToQuitar; 
        });
        // Hacemos un set de estado al nuevo carrito de compras sin el elemento
        this.setState(() => {
            return {
                carritoDeCompras: nuevoCarritoDeCompras
            };
        });
    }

    // Manejador de suma de los precios segun los items en el carrito de compras
    manejaSumaPrecioEgresos = () => {
        let precioTotal = 0;
        this.state.carritoDeCompras.map((elemento) => {
            let precioProducto = this.props.egresos.find((elementoInterno) => {
                return elementoInterno._id == elemento.idEgreso;
            });
            //console.log(precioProducto);
            precioTotal = precioTotal + (precioProducto.precio * elemento.cantidad);
        });
        return precioTotal;
    }

    // Manejador de liquidacion del carrito de compras
    manejaLiquidarCarrito = (modoPago, fecha) => {
        let arregloDatosCompras = [];
        this.state.carritoDeCompras.map((elemento) => {
            let datosCompra = this.props.egresos.find((elementoInterno) => {
                return elementoInterno._id == elemento.idEgreso;
            });
            // Para que me deje usar el spread operator (une 2 objetos)
            let cantidadObjeto = {
                cantidad: elemento.cantidad
            }
            // Lo agregamos al arreglo
            arregloDatosCompras = [
                ...arregloDatosCompras,
                // Usamos el spread para aniadir las caracteristicas que encontramos con
                // el match del almacen y la cantidad del elemento a liquidar
                {
                    ...datosCompra,
                    ...cantidadObjeto
                }
            ]
        });
        // Verificamos que no esta vacio el arreglo
        if(arregloDatosCompras.length < 1) alert('No se puede liquidar una cuenta vacia');
        console.log('El arreglo de compras que se van a aniadir es: ',arregloDatosCompras);
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
                modoPago:           modoPago,
                fecha:              fecha,
                cantidad:           elemento.cantidad
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
                                carritoDeCompras             = {this.state.carritoDeCompras}
                                manejaQuitarEgreso           = {this.manejaQuitarEgreso}
                                manejaAgregarCantidadCarrito = {this.manejaAgregarCantidadCarrito}
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
