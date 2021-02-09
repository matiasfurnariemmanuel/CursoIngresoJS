/*
     MATIAS FURNARI "DIVISION H"
Al ingresar una edad debemos informar si la persona es adolescente,
edad entre 13 y 17 años (inclusive) . 
*/
function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	if(edad>=13 && edad<=17)// if (edad > 12 && edad <18)
	{
		alert("Usted es adolecente");
	 }
	
       //Operadores Logicos: &&  = and (y) deben cumplirse TODAS las condiciones para que se aplique
	   //Operadores Logicos: ||  ) or (Diyuncion) debe cumplirse aunque sea una condicion para que aplique

}//FIN DE LA FUNCIÓN