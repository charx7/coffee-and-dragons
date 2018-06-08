import React from 'react';
import { sumaPrecioCompras,
         sumaPrecioVentas } from '../../selectores/selectorSumasConceptos';

class Caja extends React.Component {



    render () {
        return (
            <div>
                <table className = 'table table-striped'>
                    <thead>
                        <tr>
                            <th>Concepto</th>
                            <th>Saldo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Caja Inicial
                            </td>
                            <td>
                                0
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Ingresos Totales
                            </td>
                            <td>
                                <strong> {sumaPrecioVentas(this.props.ventas)} </strong>
                            </td>
                        </tr>
                        <tr>
                            <td> 
                                Ingresos Tarjeta 
                            </td>
                            <td>
                                {sumaPrecioVentas(this.props.ventasTarjeta)}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Ingresos en Efectivo
                            </td>
                            <td> 
                                {sumaPrecioVentas(this.props.ventasEfectivo)}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Egresos Totales
                            </td>
                            <td>
                                <strong> {sumaPrecioCompras(this.props.compras)} </strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Egresos Efectivo
                            </td>
                            <td>
                                {sumaPrecioCompras(this.props.comprasEfectivo)}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Egresos Tarjeta
                            </td>
                            <td>
                                {sumaPrecioCompras(this.props.comprasTarjeta)}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Egresos Transferencia
                            </td>
                            <td>
                                {sumaPrecioCompras(this.props.comprasTransferencia)}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Traspasos a Sobre
                            </td>
                            <td>
                                {sumaPrecioCompras(this.props.comprasTraspasoSobre)}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Caja Teoria
                            </td>
                            <td>
                                0
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Caja Real
                            </td>
                            <td>
                                0
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Diferencia
                            </td>
                            <td>
                                0
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Caja;
