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

    render() {
        return (
            <div className = 'col-md-9'>
                {/* Importamos la lista de Egresos*/}
                <ListaEgresos
                    manejaEgresoSeleccionado = {this.manejaEgresoSeleccionado}
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
