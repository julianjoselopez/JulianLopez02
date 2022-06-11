/*
Almacene en un arreglo de dimensión N números (la
  cantidad es ingresada por el usuario)
  • Muestre cuántos números son positivos, cuántos son
  negativos y cuántos ceros hay
*/

btnEnviar.addEventListener("click", () => {

  //declaracion de variables
  let indice: number;
  let posicion: number;
  let esCero: number = 0;
  let positivo: number = 0;
  let negativo: number =0;
  let dimension: number = Number(prompt("ingrese la cantidad de datos a utilizar"));
  let arreglo1: number[] = new Array(dimension);
  
      
  //declaracion de funciones
  
let cargarDatosArray = (arreglo1: number[]):number [] => {
  for (indice = 0; indice < arreglo1.length; indice++) {
    posicion = indice + 1;
    arreglo1[indice] = Number(prompt("ingrese un numero de la posicion "+ posicion));
}
  return arreglo1;
};

  // carga de datos
  cargarDatosArray(arreglo1);

  // obtencion de resultados
  for (indice = 0; indice < arreglo1.length; indice++) {
      if arreglo1[indice] == 0 {
        esCero ++;
      }
      if arreglo1[indice] > 0 {
        positivo ++;
      }
      if arreglo1[indice] < 0 {
        negativo ++;
      } 
  };

  //mostrar resultado por consola
  if 
  console.log("hay "+ positivo +" positivo/s, "+ negativo +" negativo/s y "+ esCero " cero/s");

};