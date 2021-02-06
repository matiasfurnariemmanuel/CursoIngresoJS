/*
ALUMNO FURNARI MATIAS "DIVISION H"
en el ejercicio 10 de entrada y salida,
se debe pedir el nombre y el precio del producto,
tambien se debe pedir el porcentaje de descuento al usuario,
mostar el mensaje "usted compro un XXXXXX con XX % de descuento,
el precio final es XXXX"*/
function mostrarAumento() {
/*
	let nombreProducto;
	let precioProducto;
    let porcentaje;
    let descuento;
	let precioFinal;

	nombreProducto= prompt("Ingrese el nombre del producto: ");
	precioProducto= document.getElementById("txtIdImporte").value;
	precioProducto= parseFloat(precioProducto);
	porcentaje= prompt("Ingrese el porcentaje de descuento: ");
	porcentaje = parseFloat(porcentaje);
	descuento= precioProducto*porcentaje/100;
	precioFinal= precioProducto-descuento;
	alert("Usted compro un "+nombreProducto+" con un "+porcentaje+" de descuento,el precio final es: "+precioFinal);
	*/
	
	
	
	
	
	let importe;
	let importefinal;
	let descuento;
	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);
	descuento = importe * 25 / 100;
	//descuento = importe*0.25;
	//descuento = importe - (importe*0.75);
	//importefinal= importe*0.75;
	importefinal = importe - descuento;
	document.getElementById("txtIdResultado").value = importefinal;
	
}
