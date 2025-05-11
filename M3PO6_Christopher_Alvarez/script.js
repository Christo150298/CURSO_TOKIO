function pedirLetras() {

    let letras = "";
    let entrada;

    do {
        entrada = prompt("Introduce una letra (una sola):");

        if (entrada === null) 
            break; // Esto para cuando el usuario Cancela

        if (entrada.length !== 1) {
            alert("Solo puedes introducir UNA letra cada vez.");
            continue;
        }

        if (!/^[a-zA-Z]$/.test(entrada)) {
            alert("Solo se permiten letras (sin números ni símbolos).");
            continue;
        }

        letras += entrada;

    } while (true);

    document.getElementById("resultado").textContent = "Resultado: " + letras;
}