function bienvenida() {
  alert("Hola, ingresaste al sitio adecuado para elegir tu próximo viaje.");
  let nombre = prompt("Por favor, indícanos tu nombre.");
  alert(`Hola ${nombre}, esta aplicación te va a ayudar a buscar tu vuelo con el mejor precio y calcular tus cuotas.`);
  alert("Los destinos son los siguientes: Buenos Aires, Mendoza, Córdoba, Ushuaia, Iguazú, Salta.");
  let idaYVuelta = prompt("Indica si es vuelo Ida con 1 o Ida y Vuelta con 2");
  let ingresarOrigen = prompt(
    `${nombre}, elige el origen de tu próximo vuelo.`);
  let ingresarDestino = prompt("Ahora elige el destino.");
  ingresarOrigen = ingresarOrigen.toUpperCase();
  ingresarDestino = ingresarDestino.toUpperCase();
  idaYVuelta = parseInt(idaYVuelta);
  return { nombre, idaYVuelta, ingresarOrigen, ingresarDestino };
}

function calcularCuotas(cantidad) {
  alert(`La suma total de tus vuelos es: $${cantidad}`);
  let opcion = prompt("¿Te gustaría saber cuál es el importe de tus vuelos en cuotas?");

  if (opcion && opcion.toUpperCase() === "SI") {
    let cuotas = parseInt(prompt("Puedes elegir entre 1, 3, 6 o 12"));

    while (![1, 3, 6, 12].includes(cuotas)) {
      alert("Las opciones de cuotas son: 1, 3, 6 o 12");
      cuotas = parseInt(prompt("Cantidad de cuotas"));
    }

    importeCuotas(cantidad, cuotas);
  } else {
    alert("Gracias por usar nuestra Aplicación.");
  }
}

function importeCuotas(resultado, cuotas) {
  let importeCuota = resultado / cuotas;
  let decimales = importeCuota.toFixed(2);
  alert(`Vas a pagar ${cuotas} cuotas de: $${decimales}`);
  alert("Gracias por usar nuestra Aplicación.");
}

class Vuelo {
  constructor(origen, destino, tarifa) {
    this.origen = origen.toUpperCase();
    this.destino = destino.toUpperCase();

    this.tarifa = parseInt(tarifa);
  }
}

let vuelo1 = new Vuelo("Buenos Aires", "Cordoba", 15000);
let vuelo2 = new Vuelo("Buenos Aires", "Salta", 25000);
let vuelo3 = new Vuelo("Buenos Aires", "Mendoza", 20000);
let vuelo4 = new Vuelo("Buenos Aires", "Ushuaia", 35000);
let vuelo5 = new Vuelo("Buenos Aires", "Iguazu", 25000);
let vuelo6 = new Vuelo("Cordoba", "Buenos Aires", 17500);
let vuelo7 = new Vuelo("Salta", "Buenos Aires", 20000);
let vuelo8 = new Vuelo("Mendoza", "Buenos Aires", 22300);
let vuelo9 = new Vuelo("Ushuaia", "Buenos Aires", 32560);
let vuelo10 = new Vuelo("Iguazu", "Buenos Aires", 20350);

let { ingresarOrigen, ingresarDestino, idaYVuelta } = bienvenida();

console.log(`${ingresarOrigen} origen y destino ${ingresarDestino}`);

function tarifa() {
  let result = null;
  while (result === null) {
    for (let vuelo of [
      vuelo1,
      vuelo2,
      vuelo3,
      vuelo4,
      vuelo5,
      vuelo6,
      vuelo7,
      vuelo8,
      vuelo9,
      vuelo10,
    ]) {
      if (
        vuelo.origen === ingresarOrigen &&
        vuelo.destino === ingresarDestino
      ) {
        result = vuelo;
        break;
      }
    }

    if (result === null) {
      alert("Vuelo inválido, por favor, ingresa otro origen y destino.");

      
      let nuevoOrigen = prompt("Por favor, ingresa el origen nuevamente:");
      let nuevoDestino = prompt("Por favor, ingresa el destino nuevamente:");
      ingresarOrigen = nuevoOrigen.toUpperCase();
      ingresarDestino = nuevoDestino.toUpperCase();
    }
  }

  let cantidad = null;

  if (idaYVuelta === 1) {
    cantidad = result.tarifa;
    alert(`Tu tarifa es de $ ${result.tarifa}`);
  } else if (idaYVuelta === 2) {
    cantidad = result.tarifa * 2;
    alert(`Tu tarifa es de $ ${result.tarifa * 2}`);
  }

  return cantidad;
}

let cantidad = tarifa();
if (cantidad != null) {
  calcularCuotas(cantidad);
}
