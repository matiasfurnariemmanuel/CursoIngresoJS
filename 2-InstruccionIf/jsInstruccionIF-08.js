/*
          FURNARI MATIAS "DIVISION H"
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.' 
*/
function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	let estadoCivil;
	estadoCivil=document.getElementById("estadoCivil").value;

	
	if(edad<18 && estadoCivil != "Soltero")
	{
	}
	else
	{
		if(edad<18 && estadoCivil == "Soltero")
		{
		}
		else
		{
			alert("Es soltero y no es menor");
		}
		}

}//FIN DE LA FUNCIÓN