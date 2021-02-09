/*
    MATIAS FURNARI "DIVISION H"
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años)
o adolescente (entre 13 y 17 años)
o niño (menor a 13 años). 
*/
function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	if(edad>=18)
	{
		alert("Es mayor de edad");
	}
	else 
	{
		if(edad>12 && edad<18)
		{
			alert("Es adolescente");
		}
		else
		{ 
			alert("Es menor de edad")
		}
	}


}//FIN DE LA FUNCIÓN