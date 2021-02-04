/*Realizar el algoritmo que  pida el ancho y el largo 
de un rectángulo por prompt y que muestre el perímetro por alert.
*/
function mostrar()
{
let ancho;
let largo;
let perimetro;
ancho = prompt("Indique el ancho del rectangulo: ");
ancho = parseFloat(ancho);
largo = prompt("Indique el largo del rectangulo: ");
largo = parseFloat(largo);
perimetro = (ancho + largo)*2;
alert("el perimetro del rectangulo es: "+perimetro);


}
