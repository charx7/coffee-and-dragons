import React from 'react';
import ListaEgresos from './ListaEgresos';
import EditarEgresos from './EditarEgresos';

class CatalogoEgresos extends  React.Component {
    // Estado que nos dice cual es el producto seleccionado actualmente
    state = {
        currentEgreso: {}
    }

    // Funcion que vamos a pasar como prop que maneja que producto hemos seleccionado actualmente
    manejaEgresoSeleccionado = (resultadoQuery) => {
        console.log('Entro a marcar resultado query de egreso');
        this.setState({
            currentEgreso: resultadoQuery
        });
    }

    manejaNuevoEgreso = () => {
        // Hace que los props que se pasen al componente de detalles de producto sean para un producto nuevo
        this.setState({
            currentEgreso: {
                descripcion: "Nueva Descripcion",
                precio: 'Nuevo Precio',
                imagen: 'URL Imagen',
                proveedor: 'Sams',
                tipoEgreso: 'Nuevo Tipo Egreso',
                unidadPresentacion: 'Nueva Unidad Presentacion',
                usoDestino: 'Nuevo Uso Destino',
                iva: 'Inserte IVA'
            }
        });
    }

    render() {
        return (
            <div className = 'col-md-9'>
                {/* Importamos la lista de Egresos*/}
                <ListaEgresos
                    manejaEgresoSeleccionado = {this.manejaEgresoSeleccionado}
                    manejaNuevoEgreso        = {this.manejaNuevoEgreso}
                />
                {/* Importaciones del componente que edita el egreso especifico */}
                <EditarEgresos
                    currentEgreso = {this.state.currentEgreso}
                />
            </div>
        )
    }
}

export default CatalogoEgresos
