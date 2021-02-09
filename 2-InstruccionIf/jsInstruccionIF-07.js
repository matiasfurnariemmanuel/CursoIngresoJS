/*
           MATIAS FURNARI "DIVISION H"
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",mostrar el siguiente mensaje:
'Es muy pequeño para NO ser soltero.' 
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
		alert("Es muy pequeño para NO ser soltero");
	}
	else
	{
		}
	
}//FIN DE LA FUNCIÓN