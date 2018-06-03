import React from 'react';

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
                                500
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Ingresos Totales
                            </td>
                            <td>
                                300
                            </td>
                        </tr>
                        <tr>
                            <td> 
                                Ingresos Tarjeta 
                            </td>
                            <td>
                                100
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Ingresos en Efectivo
                            </td>
                            <td> 
                                100
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Egresos Efectivo
                            </td>
                            <td>
                                100
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Egresos Tarjeta
                            </td>
                            <td>
                                100
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Traspasos a Sobre
                            </td>
                            <td>
                                0
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Egresos Totales
                            </td>
                            <td>
                                100
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Caja Teoria
                            </td>
                            <td>
                                100
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Caja Real
                            </td>
                            <td>
                                100
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Diferencia
                            </td>
                            <td>
                                100
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Caja;
