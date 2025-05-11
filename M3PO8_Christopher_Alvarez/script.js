window.onload = function () {

    let numero;
    
    do {
        numero = prompt("Introduce un numuero entre el 0 y el 10")

        if(numero === null) return;

        numero = parseInt(numero);
        
        if(isNaN(numero) || numero < 0 || numero > 10) {
            alert("El número introducido no es válido, debe ser un numero entre 0 y 10");
        }
    } while(isNaN(numero) || numero < 0 || numero >10);
  
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    document.getElementById("resultado").textContent =`El factorial de ${numero} es ${factorial}.`;
}