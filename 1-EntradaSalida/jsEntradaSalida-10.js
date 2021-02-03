/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
    let importe;
	let importefinal;
	let descuento;
	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);
	descuento = importe * 25 / 100;
	descuento = parseInt(descuento);
	importefinal = importe - descuento;
	document.getElementById("txtIdResultado").value = importefinal;
}
