export const intentoLogeo = () => ({
    type: 'INTENTO_LOGEO_AUTENTICACION'
});

export const fallidoLogeo = (error) => ({
    type: 'INTENTO_LOGEO_FALLIDO',
    error
});

export const exitoLogeo = (json) => ({
    type: 'INTENTO_LOGEO_EXITO',
    json
});
