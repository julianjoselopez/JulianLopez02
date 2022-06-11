/*
Almacene en un arreglo de tamaño N los números ingresados
por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del último al primero

*/

btnEnviar.addEventListener("click", () => {

  //declaracion de variables
  let dimension: number = Number(prompt("ingrese la cantidad de datos a utilizar"));
  //let dimension: number;
  let arreglo1: number[] = new Array(dimension);
  let arreglo2: number[] = new Array(dimension);
  let indice: number;
  let posicion: number;
      
  //declaracion de funciones
  
let cargarDatosArray = (arreglo1: number[]):number [] => {
  for (indice = 0; indice < arreglo1.length; indice++) {
    posicion = indice + 1;
    arreglo1[indice] = Number(prompt("ingrese un numero de la posicion "+ posicion));
}
  return arreglo1;
};

let invertirArray = (arreglo1: number[], arreglo2: number[]):number [] => {
  posicion = arreglo1.length -1;
  for (indice = 0; indice < arreglo1.length; indice++) {
    arreglo2[indice] = arreglo1[posicion];
    posicion --;
  }
  return arreglo2;
};

  // carga de datos
  cargarDatosArray(arreglo1);
  invertirArray(arreglo1, arreglo2);

  //mostrar resultado por consola
  console.log(arreglo2);