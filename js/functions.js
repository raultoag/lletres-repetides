let nombre = ["R", "4", "U", "L"];


// ejercicio 1


for (let i = 0; i < nombre.length; i++) {
    console.log(nombre[i]);
   
}
// ejercicio 2

for (let i = 0; i < nombre.length; i++) {
   
    if (nombre[i] == "A" || nombre[i] == "E" || nombre[i] == "I" || nombre[i] == "O" || nombre[i] == "U" ){
        var letra ="Esta es la vocal " + nombre[i];
    }
    else if (isNaN(nombre[i]) == false){
        var letra = "El nombre no contiene el numero " + nombre[i];
    }
    else{
        var letra ="esta es la consonante " + nombre[i];
    }
    console.log(letra);
}

//ejercicio 3
var nom = nombre.map(nomMap);

function nomMap(firstName){
    
    
    return firstName;
}

console.log(nom);

//ejercicio 4
let name = ["R", "4", "U", "L"];

var nomb = name.map(nomMap);

function nomMap(letra){   
    return letra;
}
var espacio = " ";
nomb.push(espacio);
nomb.push("T", "O", "R", "R","I","C","O");
console.log(nomb);
