/*Al ingresar una edad debemos informar
 solo si la persona es mayor de edad */

function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	if(edad<18){alert("Usted es menor de edad tiene: "+edad+" años");} else{alert("Usted es mayor de edad")};

	

}//FIN DE LA FUNCIÓN