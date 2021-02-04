/*
Pedir por prompt el precio y el porcentaje de descuento,
mostrar el precio final con descuento por id.
*/
function mostrar()
{
let precio;
let porcentaje;
let descuento;
let precioFinal;
precio = prompt("Ingrese el precio: ");
precio = parseFloat(precio);
porcentaje = prompt("Ingrese el porcentaje de descuento: ");
porcentaje = parseFloat(porcentaje);
descuento = precio*porcentaje/100;
precioFinal = precio - descuento;
document.getElementById("elPrecioFinal").value = precioFinal;


}
