let nota = prompt("Introduce una nota entre 0 y 10:");
nota = parseFloat(nota);

if (isNaN(nota) || nota < 0 || nota > 10) {
    alert("Por favor, introduce una nota válida entre 0 y 10.");
} else if (nota >= 0 && nota <= 2.99) {
    alert("Muy deficiente");
} else if (nota >= 3 && nota <= 4.99) {
    alert("Insuficiente");
} else if (nota >= 5 && nota <= 5.99) {
    alert("Suficiente");
} else if (nota >= 6 && nota <= 6.99) {
    alert("Bien");
} else if (nota >= 7 && nota <= 8.99) {
    alert("Notable");
} else if (nota >= 9 && nota <= 10) {
    alert("Sobresaliente");
}