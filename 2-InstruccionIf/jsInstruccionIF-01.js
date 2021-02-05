/*Al ingresar una edad que sea igual a 15,
mostrar el mensaje "niña bonita".
*/
function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	if(edad!=15){alert("Su edad es: "+edad)}else{alert("nina bonita")};
	//Condicionales: esto se traduce como"Si(if) es distinto(!=)de 15 su edad es(y el numero con el que carguemos la variable)
	//En caso de darle el valor 15 a la variable osea a edad se nos aparecerá el mensaje "niña bonita"
	//dado que no se cumple la condicion que nosotros impusimos en este caso particular
	// que es que el valor que carguemos a la variable debe ser distinta de 15 
}//FIN DE LA FUNCIÓN