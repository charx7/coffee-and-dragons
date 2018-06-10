import React from 'react';
import numeral from 'numeral';

class ArqueoInicioTeorico extends React.Component {

    state = {
        cantidad500:    this.props.currentArqueo.denom500,
        cantidad200:    this.props.currentArqueo.denom200,
        cantidad100:    this.props.currentArqueo.denom100,
        cantidad50:     this.props.currentArqueo.denom50,
        cantidad20:     this.props.currentArqueo.denom20,
        cantidad10:     this.props.currentArqueo.denom10,
        cantidad5:      this.props.currentArqueo.denom5,
        cantidad2:      this.props.currentArqueo.denom2,
        cantidad1:      this.props.currentArqueo.denom1,
        cantidadPunto5: this.props.currentArqueo.denomPunto5
    }

    // IMPORTANTE!!!! Metodo de life-cycle para actualizar estado en cambio de componentes
    componentDidUpdate(previousProps, previousState) {
        // Verifica si los props anteriores son diferentes a los nuevos y hace update al estado en ese caso
        if(previousProps.currentArqueo.denom500         !== this.props.currentArqueo.denom500
            || previousProps.currentArqueo.denom200     !== this.props.currentArqueo.denom200
            || previousProps.currentArqueo.denom100     !== this.props.currentArqueo.denom100
            || previousProps.currentArqueo.denom50      !== this.props.currentArqueo.denom50
            || previousProps.currentArqueo.denom20      !== this.props.currentArqueo.denom20
            || previousProps.currentArqueo.denom10      !== this.props.currentArqueo.denom10
            || previousProps.currentArqueo.denom5       !== this.props.currentArqueo.denom5
            || previousProps.currentArqueo.denom2       !== this.props.currentArqueo.denom2
            || previousProps.currentArqueo.denom1       !== this.props.currentArqueo.denom1
            || previousProps.currentArqueo.denomPunto5  !== this.props.currentArqueo.denomPunto5) {
          this.setState({ 
            cantidad500:     this.props.currentArqueo.denom500,
            cantidad200:     this.props.currentArqueo.denom200,
            cantidad100:     this.props.currentArqueo.denom100,
            cantidad50:      this.props.currentArqueo.denom50,
            cantidad20:      this.props.currentArqueo.denom20,
            cantidad10:      this.props.currentArqueo.denom10,
            cantidad5:       this.props.currentArqueo.denom5,
            cantidad2:       this.props.currentArqueo.denom2,
            cantidad1:       this.props.currentArqueo.denom1,
            cantidadPunto5:  this.props.currentArqueo.denomPunto5
        });
        }
      }

    render () {
        return (
            <div>
                <h3>
                    <strong>Inicio Teorico</strong>
                </h3>
                <table className = 'table table-striped' id = 'tablaTeorica'>
                    <thead>
                        <tr>
                            <th>Cantidad</th>
                            <th>Denominacion</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {this.props.currentArqueo.denom500}
                            </td>
                            <td>500.00</td>
                            <td>
                                <strong>
                                    {numeral(this.state.cantidad500 * 500).format('$0,0.[00]')}
                                </strong> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {this.props.currentArqueo.denom200}
                            </td>
                            <td>200.00</td>
                            <td>
                                <strong>
                                    {numeral(this.state.cantidad200 * 200).format('$0,0.[00]')}
                                </strong> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {this.props.currentArqueo.denom100}
                            </td>
                            <td>100.00</td>
                            <td>
                                <strong>
                                    {numeral(this.state.cantidad100 * 100).format('$0,0.[00]')}
                                </strong> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {this.props.currentArqueo.denom50}
                            </td>
                            <td>50.00</td>
                            <td>
                                <strong>
                                    {numeral(this.state.cantidad50 * 50).format('$0,0.[00]')}
                                </strong> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {this.props.currentArqueo.denom20}
                            </td>
                            <td>20.00</td>
                            <td>
                                <strong>
                                    {numeral(this.state.cantidad20 * 20).format('$0,0.[00]')}
                                </strong> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {this.props.currentArqueo.denom10}
                            </td>
                            <td>10.00</td>
                            <td>
                                <strong>
                                    {numeral(this.state.cantidad10 * 10).format('$0,0.[00]')}
                                </strong> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {this.props.currentArqueo.denom5}
                            </td>
                            <td>5.00</td>
                            <td>
                                <strong>
                                    {numeral(this.state.cantidad5 * 5).format('$0,0.[00]')}
                                </strong> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {this.props.currentArqueo.denom2}
                            </td>
                            <td>2.00</td>
                            <td>
                                <strong>
                                    {numeral(this.state.cantidad2 * 2).format('$0,0.[00]')}
                                </strong> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {this.props.currentArqueo.denom1}
                            </td>
                            <td>1.00</td>
                            <td>
                                <strong>
                                    {numeral(this.state.cantidad1 * 1).format('$0,0.[00]')}
                                </strong> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {this.props.currentArqueo.denomPunto5}
                            </td>
                            <td>0.50</td>
                            <td>
                                <strong>
                                    {numeral(this.state.cantidadPunto5 * 0.5).format('$0,0.[00]')}
                                </strong> 
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><strong>Gran Total: </strong></td>
                            <td> {
                                    numeral(
                                    this.state.cantidad500    * 500 +
                                    this.state.cantidad200    * 200 +
                                    this.state.cantidad100    * 100 +
                                    this.state.cantidad50     * 50  +
                                    this.state.cantidad20     * 20  +
                                    this.state.cantidad10     * 10  +
                                    this.state.cantidad5      * 5   +
                                    this.state.cantidad2      * 2   +
                                    this.state.cantidad1      * 1   +
                                    this.state.cantidadPunto5 * 0.5
                                    ).format('$0,0.[00]') 
                                } 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ArqueoInicioTeorico;
