/*FURNARI MATIAS "DIVISION H"
Debemos lograr tomar el sueldo por ID ,
transformarlo a entero (parseInt), luego
mostrar el nuevo suedo con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {
   let sueldo;
   let aumento;
   let nuevosueldo;
   sueldo = document.getElementById("txtIdSueldo").value;
   sueldo = parseInt(sueldo);
   aumento = (sueldo * 10) / 100;
   //aumento = sueldo * 0.1;
   //aumento = sueldo *10 /100;
   //resultado = sueldo + (sueldo*0.1);
   nuevosueldo = sueldo + aumento;
   document.getElementById("txtIdResultado").value = nuevosueldo;
}
