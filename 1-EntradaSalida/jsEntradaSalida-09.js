/*FURNARI MATIAS "DIVISION H"
Debemos lograr tomar el sueldo por ID ,
transformarlo a entero (parseInt), luego
mostrar el nuevo suedo con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
   let sueldo;
   let aumento;
   let nuevosueldo;
   sueldo = document.getElementById("txtIdSueldo").value;
   sueldo = parseInt(sueldo);
   aumento = (sueldo * 10)/100;
   aumento = parseInt(aumento);
   nuevosueldo= sueldo + aumento;
   document.getElementById("txtIdResultado").value = nuevosueldo;
}
