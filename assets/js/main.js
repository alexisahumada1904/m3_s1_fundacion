moment.locale('es-mx')

let fecha_actual = moment().format('L')

$("#fecha_actual").html(fecha_actual)

let dias_random = Math.floor(Math.random()*31)

let fecha_random = moment().add(dias_random, 'days').calendar();
$("#fecha_random").html(fecha_random)

$("#dias_faltantes").html(`${dias_random} dias!` )





