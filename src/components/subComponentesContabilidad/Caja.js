import React from 'react';
import { sumaPrecioCompras,
         sumaPrecioVentas } from '../../selectores/selectorSumasConceptos';
import numeral from 'numeral';

class Caja extends React.Component {

    state = {
        razonesDiferencia: this.props.currentArqueo.razonesDiferencia ? this.props.currentArqueo.razonesDiferencia : '',
        egresosIzettle:    this.props.currentArqueo.saldoIzettle ? this.props.currentArqueo.saldoIzettle : 0
    }
    
    // IMPORTANTE!!!! Metodo de life-cycle para actualizar estado en cambio de componentes
    componentDidUpdate(previousProps) {
        // Verifica si los props anteriores son diferentes a los nuevos y hace update al estado en ese caso
        if(previousProps.currentArqueo._id !== this.props.currentArqueo._id) {
            this.setState({ 
                egresosIzettle:    this.props.currentArqueo.saldoIzettle ? this.props.currentArqueo.saldoIzettle : 0,
                razonesDiferencia: this.props.currentArqueo.razonesDiferencia ? this.props.currentArqueo.razonesDiferencia : ''
            });
        }
      }

    // Manejador del textarea
    manejaCambioRazonesDiferencia = (e) => {
        let cadenaRazones = e.target.value;
        this.setState({
            razonesDiferencia: cadenaRazones
        });
    }

    // Manejador del iZettle
    manejaCambioIzettle = (e) => {
        const cadenaSaldosZettle = e.target.value;
        if(!cadenaSaldosZettle || cadenaSaldosZettle.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState({
                egresosIzettle: cadenaSaldosZettle
            });
        }
    }

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
                                <strong>iZettle</strong>
                            </td>
                            <td>
                                <input 
                                    type      ="text"
                                    maxLength = "8" 
                                    size      = "8"
                                    value     = {this.state.egresosIzettle}
                                    onChange  = {this.manejaCambioIzettle}
                                />
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
                                {
                                    numeral(this.props.cajaFinal).format('$0,0.[00]')
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Diferencia (El calculo se hace con el campo iZettle)
                            </td>
                            <td>
                            <strong>
                                {
                                    numeral(
                                    this.props.cajaFinal 
                                    - (this.props.cajaInicial 
                                    + sumaPrecioVentas(this.props.ventas)
                                    + sumaPrecioVentas(this.props.ventasTarjeta) 
                                    - this.state.egresosIzettle
                                    - sumaPrecioCompras(this.props.compras))).format('$0,0.[00]') 
                                }
                            </strong>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className = 'row'>
                    <div className = 'col-md-12'>
                        <div className = "form-group">
                            <label htmlFor ="textoRazonDiferencia">Razones diferencia:</label>
                            <textarea 
                                className = "form-control" 
                                id       = "textoRazonDiferencia" 
                                rows     ="3"
                                value    = {this.state.razonesDiferencia}
                                onChange = {this.manejaCambioRazonesDiferencia}
                            >
                            </textarea>
                        </div>
                    </div>
                </div>
                <button 
                    type="button" 
                    className="btn btn-primary btn-block"
                    onClick = {() => {
                        let actualizaciones = {
                            saldoIzettle:       parseFloat(this.state.egresosIzettle),
                            razonesDiferencia:  this.state.razonesDiferencia,
                            hechaPor:           this.props.nombreUsuario
                        }
                        this.props.manejaGuardarSaldos(this.props.currentArqueo._id,this.props.currentFecha,actualizaciones);    
                    }}            
                >
                    Guardar Saldos Caja
                </button>
                <h3>Hecho por: {this.props.currentArqueo.hechaPor ? this.props.currentArqueo.hechaPor: ''}</h3>
            </div>
        )
    }
}

export default Caja;
