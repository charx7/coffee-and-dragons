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
                <td>{numeral((this.props.montoVentasCafeteria * this.props.porcentajeCafeteria) - this.props.montoResta).format('$0,00[00]')}</td>
                <td>
                    <strong>
                        {numeral(this.props.montoAcumulado).format('$0,00[00]')}                        
                    </strong>
                </td>
                <td>
                    {numeral(this.props.montoVentasTienda).format('$0,00[00]')}
                </td>
                <td> {numeral((this.props.montoVentasTienda * this.props.porcentajeTienda) - this.props.montoResta).format('$0,00[00]')}</td>
                <td>
                    <strong>
                        {numeral(this.props.montoAcumuladoTienda).format('$0,00[00]')}                        
                    </strong>
                </td>
            </tr>
        )
    }
}

export default DiaCostos;
