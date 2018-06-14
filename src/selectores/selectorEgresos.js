const obtenerEgresosVisibles = (egresos, texto, proveedor) => {
    return egresos.filter((elemento) => {
        const coincidenciaProveedor = (proveedor!='otro') ?
            elemento.proveedor.includes(proveedor)
            : true;
        const coincidenciaTexto = (texto!= '') ?
            elemento.descripcion.toLowerCase().includes(texto.toLowerCase())
            : true;
        return coincidenciaProveedor && coincidenciaTexto;
    })
}

export default obtenerEgresosVisibles;
