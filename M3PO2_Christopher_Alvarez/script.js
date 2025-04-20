// Pedimos el radio al usuario
let radio = prompt("Introduce el radio de la esfera:");

// Convertimos a número
radio = parseFloat(radio);

// Calculamos el volumen
let volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);

// Guardamos la fórmula como texto
let formula = "(4/3) * π * radio³";

// Mostramos el resultado por pantalla
document.writeln(`El volumen de la esfera se calcula con la fórmula ${formula},<br> 
por tanto una esfera de radio ${radio} tiene un volumen de ${volumen.toFixed(2)}`);