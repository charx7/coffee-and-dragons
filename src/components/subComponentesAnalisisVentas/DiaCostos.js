import React from 'react';
import moment from 'moment';

class DiaCostos extends React.Component {
    render(){
        return(
            <tr>
                <td>
                    {moment(this.props.diaMostrar).format('MMM Do, YYYY')}
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
        )
    }
}

export default DiaCostos;
