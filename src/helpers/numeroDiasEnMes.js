import moment from 'moment';
// Funcion que indidca cuantos dias de la semana hay en un mes determinado
// El argumento de dia de la semana tiene que ser un entero 0 para domingo 1 lunes etc.
export default function numeroDiasEnMes(fecha, diaSemana) {
    let currentDia = fecha.day();
    //console.log('El primer dia del mes es un: ',currentDia);
    let dif = (7 + (diaSemana - fecha.day())) % 7 + 1;
    //console.log('La diferencia es de: ', dif)
    //console.log("weekday: "+ weekday +", FirstOfMonth: "+ fecha.weekday() +", dif: "+dif);
    return Math.floor((fecha.daysInMonth()-dif) / 7) + 1;
}
