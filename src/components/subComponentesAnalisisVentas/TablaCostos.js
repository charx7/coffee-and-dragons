import React from 'react';
import DiaCostos from './DiaCostos';
import moment from 'moment';
import numeral from 'numeral';

class TablaCostos extends React.Component {
    
    manejaCrearCostos (numeroDiasMes, primerDia) {
        // Creamos un arreglo vacio de Dias (Filas de la tabla)
        let arregloDias = [];
        let diaDesplegar = moment(primerDia).startOf('month');
        //console.log('El primer dia es: ',diaDesplegar);
        //console.log('El monto requerido es de: ', this.props.montoRequerido);
        // Iteramos sobre estas
        for (let i = 0; i < numeroDiasMes; i++) {
                // Construimos el arreglo de las filas de la tabla a mostrar
                arregloDias.push(<DiaCostos
                    diaMostrar= {moment(diaDesplegar).add(i, 'day')}
                    key = {i}
                    montoVentasCafeteria = {this.props.ventasCafeteria[i]}
                    montoVentasTienda = {this.props.ventasTienda[i]}
            />)                        
        }

       return arregloDias 
    }

    render() {
        return(
            <div>
                <h3>
                    <strong>Costos</strong>
                </h3>
                <table className = 'table table-striped'>
                    <thead>
                        <tr>
                            <th>Dia</th>
                            <th>Cafeteria</th>
                            <th>- Gasto Fijo</th>
                            <th>Acumulado (Cafeteria)</th>
                            <th>Tienda</th>
                            <th>- Gasto Fijo</th>
                            <th>Acumulado (Tienda)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.manejaCrearCostos(this.props.currentMes.daysInMonth(), moment(this.props.currentMes))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TablaCostos;
