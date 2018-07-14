import React from 'react';
import moment from 'moment';
import numeral from 'numeral';

class DiaCostos extends React.Component {
    render(){
        return(
            <tr>
                <td>
                    {moment(this.props.diaMostrar).format("dddd, MMMM Do YYYY")}
                </td>
                <td>
                    {numeral(this.props.montoVentasCafeteria).format('$0,00[00]')}
                </td>
                <td>600.00</td>
                <td>
                    <strong>
                        500.00
                    </strong>
                </td>
                <td>
                    {numeral(this.props.montoVentasTienda).format('$0,00[00]')}
                </td>
                <td>500.00</td>
                <td>
                    <strong>
                        500.00
                    </strong>
                </td>
            </tr>
        )
    }
}

export default DiaCostos;
