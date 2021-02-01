/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
    let producto1;
    let producto2;
    let producto3;
    let suma;
    producto1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    producto2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    producto3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
    suma = producto1 + producto2 + producto3;
    alert(`La suma de los precios de los productos es: ${suma}`);


}
function Promedio() {
    let producto1;
    let producto2;
    let producto3;
    let promedio;
    producto1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    producto2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    producto3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
    promedio =  (producto1 + producto2 + producto3)/3;
    alert(`El promedio de los precios de los productos es: ${promedio}`);

}
function PrecioFinal() {
    let producto1;
    let producto2;
    let producto3;
    let preciofinal;
    let iva;
    producto1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    producto2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    producto3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
    iva = ((producto1 + producto2 + producto3)*21)/100;
    preciofinal = producto1 + producto2 + producto3 + iva;
    alert(`El precio final de los productos con iva es: ${preciofinal.toFixed(2)}`);
}