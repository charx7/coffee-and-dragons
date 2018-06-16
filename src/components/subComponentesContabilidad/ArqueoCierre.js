import React from 'react';
import moment from 'moment';
import numeral from 'numeral';

class ArqueoCierre extends React.Component {

    state = {
        cantidad500:    this.props.currentArqueoCierre.denom500,
        cantidad200:    this.props.currentArqueoCierre.denom200,
        cantidad100:    this.props.currentArqueoCierre.denom100,
        cantidad50:     this.props.currentArqueoCierre.denom50,
        cantidad20:     this.props.currentArqueoCierre.denom20,
        cantidad10:     this.props.currentArqueoCierre.denom10,
        cantidad5:      this.props.currentArqueoCierre.denom5,
        cantidad2:      this.props.currentArqueoCierre.denom2,
        cantidad1:      this.props.currentArqueoCierre.denom1,
        cantidadPunto5: this.props.currentArqueoCierre.denomPunto5
    }

    // IMPORTANTE!!!! Metodo de life-cycle para actualizar estado en cambio de componentes
    componentDidUpdate(previousProps) {
        // Verifica si los props anteriores son diferentes a los nuevos y hace update al estado en ese caso
        if(previousProps.currentArqueoCierre._id !== this.props.currentArqueoCierre._id) {
          this.setState({ 
            cantidad500:     this.props.currentArqueoCierre.denom500,
            cantidad200:     this.props.currentArqueoCierre.denom200,
            cantidad100:     this.props.currentArqueoCierre.denom100,
            cantidad50:      this.props.currentArqueoCierre.denom50,
            cantidad20:      this.props.currentArqueoCierre.denom20,
            cantidad10:      this.props.currentArqueoCierre.denom10,
            cantidad5:       this.props.currentArqueoCierre.denom5,
            cantidad2:       this.props.currentArqueoCierre.denom2,
            cantidad1:       this.props.currentArqueoCierre.denom1,
            cantidadPunto5:  this.props.currentArqueoCierre.denomPunto5
        });
        }
      }

    manejaCambioDenominaciones = (cantidad, denominacion) => {
        // Verificamos si es una cadena
        let cadenaCantidad = cantidad.target.value;
        // Le quito los espacios
        let cantidadSinEspacios = Number(cadenaCantidad.toString().trim());
        
        // Si no esta vacia procedemos a hacer los casos switch
        if(!isNaN(cantidadSinEspacios)) {
            switch (denominacion) {
                case 'DENOMINACION500':
                    this.setState(() => {
                        return ({
                            cantidad500: cantidadSinEspacios
                        });
                    });
                return;
                case 'DENOMINACION200':
                    this.setState(() => {
                        return ({
                            cantidad200: cantidadSinEspacios
                        });
                    });
                return;
                case 'DENOMINACION100':
                    this.setState(() => {
                        return ({
                            cantidad100: cantidadSinEspacios
                        });
                    });
                return;
                case 'DENOMINACION50':
                    this.setState(() => {
                        return ({
                            cantidad50: cantidadSinEspacios
                        });
                    });
                return;
                case 'DENOMINACION20':
                    this.setState(() => {
                        return ({
                            cantidad20: cantidadSinEspacios
                        });
                    });
                return;
                case 'DENOMINACION10':
                    this.setState(() => {
                        return ({
                            cantidad10: cantidadSinEspacios
                        });
                    });
                return;
                case 'DENOMINACION5':
                    this.setState(() => {
                        return ({
                            cantidad5: cantidadSinEspacios
                        });
                    });
                return;
                case 'DENOMINACION2':
                    this.setState(() => {
                        return ({
                            cantidad2: cantidadSinEspacios
                        });
                    });
                return;
                case 'DENOMINACION1':
                    this.setState(() => {
                        return ({
                            cantidad1: cantidadSinEspacios
                        });
                    });
                return;
                case 'DENOMINACIONPUNTO5':
                    this.setState(() => {
                        return ({
                            cantidadPunto5: cantidadSinEspacios
                        });
                    });
                return;
                default:
                    return;
            }
        } else {
            console.log('Cadena Invalida');
        }
    }

    render () {
        return (
            <div>
                <h3>
                    <strong>Cierre</strong>
                </h3>
                <table className = 'table table-striped'>
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
                                <input 
                                    type      = "text"
                                    value     = {this.state.cantidad500}
                                    onChange  = {(cantidad) => this.manejaCambioDenominaciones(cantidad, 'DENOMINACION500')}
                                    maxLength = "4" 
                                    size      = "4"
                                />
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
                                <input 
                                    type      = "text"
                                    value     = {this.state.cantidad200}
                                    onChange  = {(cantidad) => this.manejaCambioDenominaciones(cantidad, 'DENOMINACION200')}
                                    maxLength = "4" 
                                    size      = "4"
                                />
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
                                <input 
                                    type      = "text"
                                    value     = {this.state.cantidad100}
                                    onChange  = {(cantidad) => this.manejaCambioDenominaciones(cantidad, 'DENOMINACION100')}
                                    maxLength = "4" 
                                    size      = "4"
                                />
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
                                <input 
                                    type      = "text"
                                    value     = {this.state.cantidad50}
                                    onChange  = {(cantidad) => this.manejaCambioDenominaciones(cantidad, 'DENOMINACION50')}
                                    maxLength = "4" 
                                    size      = "4"
                                />
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
                                <input 
                                    type      = "text"
                                    value     = {this.state.cantidad20}
                                    onChange  = {(cantidad) => this.manejaCambioDenominaciones(cantidad, 'DENOMINACION20')}
                                    maxLength = "4" 
                                    size      = "4"
                                />
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
                                <input 
                                    type      = "text"
                                    value     = {this.state.cantidad10}
                                    onChange  = {(cantidad) => this.manejaCambioDenominaciones(cantidad, 'DENOMINACION10')}
                                    maxLength = "4" 
                                    size      = "4"
                                />
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
                                <input 
                                    type      = "text"
                                    value     = {this.state.cantidad5}
                                    onChange  = {(cantidad) => this.manejaCambioDenominaciones(cantidad, 'DENOMINACION5')}
                                    maxLength = "4" 
                                    size      = "4"
                                />
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
                                <input 
                                    type      = "text"
                                    value     = {this.state.cantidad2}
                                    onChange  = {(cantidad) => this.manejaCambioDenominaciones(cantidad, 'DENOMINACION2')}
                                    maxLength = "4" 
                                    size      = "4"
                                />
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
                                <input 
                                    type      = "text"
                                    value     = {this.state.cantidad1}
                                    onChange  = {(cantidad) => this.manejaCambioDenominaciones(cantidad, 'DENOMINACION1')}
                                    maxLength = "4" 
                                    size      = "4"
                                />
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
                                <input 
                                    type      = "text"
                                    value     = {this.state.cantidadPunto5}
                                    onChange  = {(cantidad) => this.manejaCambioDenominaciones(cantidad, 'DENOMINACIONPUNTO5')}
                                    maxLength = "4" 
                                    size      = "4"
                                />
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
                <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick = {() => {
                        // Llamamos a la funcion de guardar una fecha pero ahora se guarda como el dia siguiente
                        this.props.manejaGuardarArqueo(this.props.currentArqueoCierre._id, { fecha: this.props.diaSiguiente.valueOf() },
                        {
                            denom500: this.state.cantidad500,
                            denom200: this.state.cantidad200,
                            denom100: this.state.cantidad100,
                            denom50: this.state.cantidad50,
                            denom20: this.state.cantidad20,
                            denom10: this.state.cantidad10,
                            denom5: this.state.cantidad5,
                            denom2: this.state.cantidad2,
                            denom1: this.state.cantidad1,
                            denomPunto5: this.state.cantidadPunto5
                        }
                    )}}            
                >
                    Guardar Arqueo Cierre
                </button>
            </div>
        )
    }
}

export default ArqueoCierre;
