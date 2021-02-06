/*FURNARI MATIAS "DIVISION H"
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
/*3 - Ingresar dos numeros por id
Se pide:
mostrar por console.log:
a) La suma de los dos numeros
b) El promedio de los numeros.
c) El modulo de los numeros (el primero en modulo del segundo)

UTILIZAR EL EJERCICIO 8 para resolverlo*/
function SacarResto() {
	/*
	let numeroUno;
	let numeroDos;
	let suma;
	let promedio;
	let modulo;
	numeroUno=document.getElementById("txtIdNumeroDividendo").value;
	numeroUno = parseFloat(numeroUno);
	numeroDos=document.getElementById("txtIdNumeroDivisor").value;
	numeroDos = parseFloat(numeroDos);
	suma = numeroUno + numeroDos;
	promedio = suma / 2;
	modulo = numeroUno % numeroDos;
	
	console.log("La suma es: "+suma+"\nEl promedio es: "+promedio+"\nEl modulo es: "+modulo );
	*/


	
	
	
	
	
	
	
	
	
	
	
	let num1;//dividendo
	let num2;//divisor
	let resto;
	num1 = document.getElementById("txtIdNumeroDividendo").value;
	num2 = document.getElementById("txtIdNumeroDivisor").value;
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	resto = num1 % num2;
	alert("El resto es: " + resto);


}
