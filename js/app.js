function actualizarHora() {
  let fecha = new Date(),
    horas = fecha.getHours(),
    minutos = fecha.getMinutes(),
    segundos = fecha.getSeconds();

  let pHoras = document.getElementById("horas"),
    pMinutos = document.getElementById("minutos"),
    pSegundos = document.getElementById("segundos"),
    pDiaSemana = document.getElementById("diaSemana"),
    pNumDia = document.getElementById("numDia"),
    pMes = document.getElementById("mes"),
    pAnio = document.getElementById("anio");

  let semanas = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  pDiaSemana.innerHTML = semanas[fecha.getDay()];

  pNumDia.innerHTML = fecha.getDate();

  let meses = [
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
  pMes.innerHTML = meses[fecha.getMonth()];

  pAnio.innerHTML = fecha.getFullYear();

  //    asignar las horas, minutos y segundos
  if (horas < 10) {
    horas = "0" + horas; //concatenamos un cero a la hora del 0 al 9
  }
  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  pHoras.innerHTML = horas;
  pMinutos.innerHTML = minutos;
  pSegundos.innerHTML = segundos;
}

function cambiarColor(color) {
  let section = document.getElementById("contenedorPrincipal");
  console.log(section);
  switch (color) {
    case "verde":
      section.className = "w-75 green";
      break;
    case "azul":
      section.className = "w-75 blue";
      break;
    default:
      section.className = "w-75 pink";
  }
}

window.setInterval(actualizarHora, 1000);
