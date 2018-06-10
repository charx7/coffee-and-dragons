import React from 'react';
import { sumaPrecioCompras,
         sumaPrecioVentas } from '../../selectores/selectorSumasConceptos';
import numeral from 'numeral';

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
                                {numeral(this.props.cajaInicial).format('$0,0.[00]')}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Ingresos Totales
                            </td>
                            <td>
                                <strong> {numeral(sumaPrecioVentas(this.props.ventas)).format('$0,0.[00]')} </strong>
                            </td>
                        </tr>
                        <tr>
                            <td> 
                                Ingresos Tarjeta 
                            </td>
                            <td>
                                {numeral(sumaPrecioVentas(this.props.ventasTarjeta)).format('$0,0.[00]')}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Ingresos en Efectivo
                            </td>
                            <td> 
                                {numeral(sumaPrecioVentas(this.props.ventasEfectivo)).format('$0,0.[00]')}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Egresos Totales
                            </td>
                            <td>
                                <strong> {numeral(sumaPrecioCompras(this.props.compras)).format('$0,0.[00]')} </strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Egresos Efectivo
                            </td>
                            <td>
                                {numeral(sumaPrecioCompras(this.props.comprasEfectivo)).format('$0,0.[00]')}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Egresos Tarjeta
                            </td>
                            <td>
                                {numeral(sumaPrecioCompras(this.props.comprasTarjeta)).format('$0,0.[00]')}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Egresos Transferencia
                            </td>
                            <td>
                                {numeral(sumaPrecioCompras(this.props.comprasTransferencia)).format('$0,0.[00]')}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Traspasos a Sobre
                            </td>
                            <td>
                                {numeral(sumaPrecioCompras(this.props.comprasTraspasoSobre)).format('$0,0.[00]')}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Caja Teoria
                            </td>
                            <td>
                                <strong>
                                    {   numeral(
                                        this.props.cajaInicial 
                                        + sumaPrecioVentas(this.props.ventas)
                                        - sumaPrecioCompras(this.props.compras)).format('$0,0.[00]') 
                                    }
                                </strong>
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
                            <strong>
                                {
                                    numeral(
                                    0 
                                    - (this.props.cajaInicial 
                                    + sumaPrecioVentas(this.props.ventas)
                                    - sumaPrecioCompras(this.props.compras))).format('$0,0.[00]') 
                                }
                            </strong>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Caja;
