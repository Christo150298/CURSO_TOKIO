 function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

window.onload = function () {
    let monedas = 50;
    const historialNumeros = [];

    while (monedas > 0 && monedas < 100) {
        let eleccion = prompt("Elige un número del 1 al 6:");
        if (eleccion === null) break; // Cancelar

        eleccion = parseInt(eleccion);

        if (isNaN(eleccion) || eleccion < 1 || eleccion > 6) {
            alert("Debes introducir un número entero entre 1 y 6.");
            continue;
        }

        let apuesta = prompt(`Tienes ${monedas} monedas. ¿Cuántas deseas apostar? (mínimo 1)`);
        if (apuesta === null) break;

        apuesta = parseInt(apuesta);

        if (isNaN(apuesta) || apuesta < 1 || apuesta > monedas) {
            alert("Introduce una cantidad válida, no mayor a tus monedas.");
            continue;
        }

        const numeroAleatorio = getRandomInt(1, 7); // de 1 a 6
        historialNumeros.push(numeroAleatorio);

        if (eleccion === numeroAleatorio) {
            monedas += apuesta;
            alert(`¡Has acertado! Has ganado ${apuesta * 2} monedas. Te quedan ${monedas}.`);
        } else {
            monedas -= apuesta;
            alert(`Él numero que ha salido es el ${numeroAleatorio} Has perdido ${apuesta} monedas. Te quedan ${monedas}.`);
        }

        if (monedas === 0) {
            alert("Game Over");
        } else if (monedas >= 100) {
            alert("¡Enhorabuena! ¡Has ganado el juego!");
        }
    }
    // Mostrar los números aleatorios que salieron
    document.getElementById("resultado").innerHTML =`<strong>Números que salieron:</strong> ${historialNumeros.join(", ")}`;
};