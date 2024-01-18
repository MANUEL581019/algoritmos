
const listaPrecios = require("./Data");
const menorPrecio = require("./MenorPrecio");

for (let actual = 0; actual <listaPrecios.length;actual++){
    let posMenorPrecio =menorPrecio(listaPrecios, actual);
    console.log (posMenorPrecio);
    let elementoActual = listaPrecios[actual];

    let elemntoMenorPrecio = listaPrecios[posMenorPrecio];

    listaPrecios[posMenorPrecio]= elementoActual;
    listaPrecios[actual]= elemntoMenorPrecio;

   
}
 console.log(listaPrecios);
