/*
Sumar los elementos de cada una de las posiciones
de dos vectores y guardar el resultado en otro vector
• El arreglo tiene dimensión 6 y los números de los dos
vectores los carga el usuario
*/

btnEnviar.addEventListener("click", () => {

  //declaracion de variables
  //let arreglo1: number[] = new Array(1, 3, 7, 9, 9, 5);
  let arreglo1: number[] = new Array(6);
  //let arreglo2: number[] = new Array(6, 9, 2, 5, 9, 4);
  let arreglo2: number[] = new Array(6);
  let arreglo3: number[] = new Array(6);
  let indice: number;
  let posicion: number;
  let cantidad: number =6;
    
  //declaracion de funciones
  let sumarArreglos = (arreglo1: number[], arreglo2: number[], arreglo3: number[], cantidad: number) => {
    for (indice = 0; indice < cantidad; indice++) {
      arreglo3[indice] = arreglo1[indice] + arreglo2[indice];
    }
     return arreglo3;
  };
  
  let cargarDatosArray = (arreglo1: number[]):number [] => {
    for (indice = 0; indice < arreglo1.length; indice++) {
      posicion = indice + 1;
      arreglo1[indice] = Number(prompt("ingrese un numero de la posicion "+ posicion));
  }
    return arreglo1;
  };
  
  // carga de datos
  cargarDatosArray(arreglo1);
  cargarDatosArray(arreglo2);

  //obtencion del resultado
  sumarArreglos(arreglo1, arreglo2, arreglo3,cantidad);
  
  //mostrar resultado por consola
  console.log(arreglo3);