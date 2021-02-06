/* 
MATIAS FURNARI EMMANUEL "DIVISION H"
1. Ingresar descripción (por prompt) y precio de un producto (por id).
El programa deberá mostrar por alert la descripción del producto junto al precio aumentado en un 30%.
Pueden utilizar el html del ejercicio 4 para resolverlo.

*/

/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

function mostrar() {
   
   
    let nombre;
    nombre = prompt("Escriba su nombre");
    //copio el nombre que tengo guardado en la variable nombre dentro de la caja de texto embebida en la pagina html.
    document.getElementById("txtIdNombre").value = nombre;
   
   
   
   
   
   
   
   
   
    /*
    
    let descripción;
    let precio;
    let aumento;
    let precioFinal;
   
    descripción = prompt("Ingrese la descripcion del producto: ");
    precio = prompt("Ingrese el precio: ");
    
    document.getElementById("txtIdNombre").value = precio;
    precio = parseFloat(precio);
    aumento = precio * 30 / 100;
    precioFinal = precio + aumento;

    alert("La descripcion del producto es "+descripción + " y el precio del mismo con el aumento del 30% es: " + precioFinal);
    
    */



}

