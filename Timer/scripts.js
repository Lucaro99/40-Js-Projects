const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'sabado'];

let hoy = new Date();
let sorteo = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate() + 10, 12, 0, 0);

function cronometro(){
    console.log(sorteo);
}


setInterval(cronometro,1000);
