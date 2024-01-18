const listaPrecios = require("./Data");
let menor =0;

for (let actual=0;actual<listaPrecios.length;actual++){
    if (listaPrecios[actual].precio < listaPrecios[menor].precio){
        menor= actual;
    }
}


console.log(`El libro con menor precio es: ${listaPrecios[menor].nombre}`)
console.log(`El precio menor de la lista es ${listaPrecios[menor].precio}`)
console.log(`La posicion del menor precio de la  es ${menor}`)



