/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados() {
    let fahrenheit;
    let centigrados;
    fahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value);
    centigrados = (fahrenheit -32)/1.8;
    alert(`${fahrenheit} grados Fahrenheit son ${centigrados.toFixed(4)} grados Centigrados`);
}

function CentigradosFahrenheit() {
    let fahrenheit;
    let centigrados;
    centigrados = parseFloat(document.getElementById("txtIdTemperatura").value);
    fahrenheit = centigrados*1.8+32;
    alert(`${centigrados} grados Fahrenheit son ${fahrenheit.toFixed(4)} grados Centigrados`);

}
