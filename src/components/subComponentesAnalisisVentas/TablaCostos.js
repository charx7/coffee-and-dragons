import React from 'react';

class TablaCostos extends React.Component {
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
                        <tr>
                            <td>
                               Domingo X de Julio  
                            </td>
                            <td>500.00</td>
                            <td>600.00</td>
                            <td>
                                <strong>
                                    500.00
                                </strong>
                            </td>
                            <td>500.00</td>
                            <td>500.00</td>
                            <td>
                                <strong>
                                    500.00
                                </strong>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TablaCostos;
