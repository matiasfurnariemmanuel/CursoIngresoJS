/*MATIAS FURNARI "DIVISION H"
2.Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
"txtIdLargo"
"txtIdAncho"
"txtIdRadio"
*/

function Rectangulo() {
    let largo;
    let ancho;
    let perimetro;
    let alambre;

    largo = document.getElementById("txtIdLargo").value;
    largo = parseFloat(largo);
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseFloat(ancho);
    perimetro = (largo + ancho) * 2;
    alambre = perimetro * 3;
    alert("La cantidad de alambre que se tiene que comprar es:"+alambre);
}
function Circulo() {
    let radio;
    Math.PI;
    let alambre;
    radio = document.getElementById("txtIdRadio").value;
    radio = parseFloat(radio);
    diametro = 2 * Math.PI * radio;
    alambre = diametro * 3;
    alert("La cantidad de alambre que se tiene que comprar para el terreno circular es: "+alambre);

}
function Materiales() {
    let ancho;
    let largo;
    let area;
    let cemento;
    let cal;
    largo = document.getElementById("txtIdLargo").value;
    largo = parseFloat(largo);
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseFloat(ancho)
    area = largo * ancho;
    cemento = area * 2;
    cal = area * 3;
    alert("Para un contrapiso de " + area + "m2 necesito comprar " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");
}