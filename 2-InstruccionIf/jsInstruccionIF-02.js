/*
       FURNARI MATIAS "DIVISION H"
Al ingresar una edad debemos informar
 solo si la persona es mayor de edad */

function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	if(edad>=18)//if(edad>17)Esto esta mejor programado.Esto seria lo correcto.
	{
		alert("Usted tiene "+edad+" años\nUsted es mayor de edad");
	}
	else
	{
      alert("Usted es menor de edad");
	}
	
	//txtIdEdad

}//FIN DE LA FUNCIÓN