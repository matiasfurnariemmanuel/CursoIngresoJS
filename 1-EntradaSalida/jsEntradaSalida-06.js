/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
	let num1;
	num1 = document.getElementById("txtIdNumeroUno").value;
	num1 = parseInt(num1);
	let num2;
	num2 = document.getElementById("txtIdNumeroDos").value;
	num2 = parseInt(num2);
	let suma;
	suma = num1 + num2;
	//alert("el resultado es: " + suma);
	alert(`El resultado es: ${suma}`);
}

