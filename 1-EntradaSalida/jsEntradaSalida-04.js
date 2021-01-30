/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
let nombre;
nombre = prompt("Escriba su nombre");
//copio el nombre que tengo guardado en la variable nombre dentro de la caja de texto embebida en la pagina html
document.getElementById("txtIdNombre").value = nombre;


	
}

