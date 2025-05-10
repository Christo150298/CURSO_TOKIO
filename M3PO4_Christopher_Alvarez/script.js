let nota1 = parseFloat(prompt("Introduce la nota 1:"));
let nota2 = parseFloat(prompt("Introduce la nota 2:"));
let nota3 = parseFloat(prompt("Introduce la nota 3:"));
let nota4 = parseFloat(prompt("Introduce la nota 4:"));
let nota5 = parseFloat(prompt("Introduce la nota 5:"));
let nota6 = parseFloat(prompt("Introduce la nota 6:"));

let suma = nota1 + nota2 + nota3 + nota4 + nota5 + nota6;
let media = (suma / 6).toFixed(2);

document.getElementById("Media").onclick = function() {
    document.getElementById("resultado").textContent = "La nota media es: " + media;
};

document.getElementById("Calificacion").onclick = function() {
    let texto = "";

if (media <= 2.99) {
    texto = "MUY DEFICIENTE";
} else if (media <= 4.99) {
    texto = "INSUFICIENTE";
} else if (media <= 5.99) {
    texto = "SUFICIENTE";
} else if (media <= 6.99) {
    texto = "BIEN";
} else if (media <= 8.99) {
    texto = "NOTABLE";
} else {
    texto = "SOBRESALIENTE";
}

document.getElementById("resultado").textContent =
    "El alumno ha sacado un " + media + " que corresponde a un " + texto;
};