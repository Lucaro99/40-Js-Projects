const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const dias = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "sabado",
];

let hoy = new Date();
let sorteo = new Date(
  hoy.getFullYear(),
  hoy.getMonth(),
  hoy.getDate() + 10,
  12,
  30,
  0
);

document.getElementById("subtitulo").textContent = `El Concurso termina el ${
  dias[sorteo.getDay()]
} ${sorteo.getDate()} de ${
  meses[sorteo.getMonth()]
} de ${sorteo.getFullYear()} ${sorteo.getHours()}:${sorteo.getMinutes()} am`;

function cronometro() {
  const unDia = 24 * 60 * 60 * 1000;
  const unHora = 60 * 60 * 1000;
  const unMinuto = 60 * 1000;

  let tiempo = sorteo - new Date().getTime();
  let dia = Math.floor(tiempo / unDia);
  let horas = Math.floor(tiempo / unHora - dia * 24);
  let minutos = Math.floor(tiempo / unMinuto - dia * 24 * 60 - horas * 60);
  let segundos = Math.floor(
    tiempo / 1000 - dia * 24 * 60 * 60 - horas * 60 * 60 - minutos * 60
  );

  document.getElementById("dias").textContent = dia < 10 ? "0" + dia : dia;
  document.getElementById("horas").textContent = horas < 10 ? "0" + horas : horas;
  document.getElementById("mins").textContent = minutos < 10 ? "0" + minutos : minutos;
  document.getElementById("sec").textContent = segundos < 10 ? "0" + segundos : segundos;
}

setInterval(cronometro, 1000);
