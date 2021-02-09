/*
			MATIAS FURNARI "DIVISION H"
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4 
*/
function mostrar() {
	//Genero el número RANDOM entre 1 y 10 
	//Math.floor(Math.random() * 10);
	let numero;
	numero = Math.floor(Math.random() * 10);
	numero = parseInt(numero);
	if(numero>8 && numero<11)
	{
		alert("EXCELENTE"+" "+numero);
	}
	else
	{
		if(numero>3 && numero<9)
		{
			alert("APROBÓ"+" "+numero);
		}
		else
		{
			alert("Vamos, la proxima se puede"+" "+numero);
		}
	}


}//FIN DE LA FUNCIÓN