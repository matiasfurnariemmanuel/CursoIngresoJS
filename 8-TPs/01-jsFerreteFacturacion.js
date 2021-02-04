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
    producto1 = document.getElementById("txtIdPrecioUno").value;
    producto1 = parseFloat(producto1);
    producto2 = document.getElementById("txtIdPrecioDos").value;
    producto2 = parseFloat(producto2);
    producto3 = document.getElementById("txtIdPrecioTres").value;
    producto3 = parseFloat(producto3);
    suma = producto1 + producto2 + producto3;
    alert(`La suma de los precios de los productos es: ${suma}`);


}
function Promedio() {
    let producto1;
    let producto2;
    let producto3;
    let promedio;
    producto1 = document.getElementById("txtIdPrecioUno").value;
    producto1 = parseFloat(producto1);
    producto2 = document.getElementById("txtIdPrecioDos").value;
    producto2 = parseFloat(producto2);
    producto3 = document.getElementById("txtIdPrecioTres").value;
    producto3 = parseFloat(producto3);
    promedio = (producto1 + producto2 + producto3) / 3;
    alert("El promedio de los precios de los productos es: " + promedio);
    //alert(`El promedio de los precios de los productos es: ${promedio}`);

}
function PrecioFinal() {
    let producto1;
    let producto2;
    let producto3;
    let preciofinal;
    let suma;
    let iva;
    producto1 = document.getElementById("txtIdPrecioUno").value;
    producto1 = parseFloat(producto1);
    producto2 = document.getElementById("txtIdPrecioDos").value;
    producto2 = parseFloat(producto2);
    producto3 = document.getElementById("txtIdPrecioTres").value;
    producto3 = parseFloat(producto3);
    suma = producto1 + producto2 + producto3;
    iva = ((suma) * 21) / 100;
    // iva = (producto1 + producto2 + producto3)*0.21;
    preciofinal = suma + iva;
    alert("El precio final de los prodcutos con iva es: " + preciofinal);
    //alert(`El precio final de los productos con iva es: ${preciofinal.toFixed(2)}`);toFixed= muestra la cantidad de numeros despues de la coma en los numeros decimales.
}