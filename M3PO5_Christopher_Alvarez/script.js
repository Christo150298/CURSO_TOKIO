function elegirMenu() {

    let primerPlato = prompt("Por favor, elija el número de su primer plato (1 a 5):");
    let segundoPlato = prompt("Por favor, elija el número de su segundo plato (1 a 5):");

    let primerPlatoConvertido = obtenerPlato(primerPlato, "primer");
    let segundoPlatoConvertido = obtenerPlato(segundoPlato, "segundo");

    if (primerPlatoConvertido && segundoPlatoConvertido) {
        alert(`Ha elegido de primer plato ${primerPlatoConvertido} y de segundo plato ${segundoPlatoConvertido}`);
    } else {
        alert("Opción inválida. Por favor, elija un número entre 1 y 5.");
    }
}

function obtenerPlato(numero, tipo) {

    if (tipo === "primer") {
        switch (numero) {
            case "1":
                return "Ensalada Mixta";
            case "2":
                return "Sopa de Tomate";
            case "3":
                return "Macarrones con Chorizo";
            case "4":
                return "Mix Croquetas (3 Unidades)";
            case "5":
                return "Crema de Verduras";
            default:
                return null;
        }
    }

    if (tipo === "segundo") {
        switch (numero) {
            case "1":
                return "Entrecot";
            case "2":
                return "Albondigas en Salsa";
            case "3":
                return "Merluza al Horno";
            case "4":
                return "Pollo al Horno";
            case "5":
                return "Carrillera de Vaca";
            default:
                return null;
        }
    }

    return null;
}