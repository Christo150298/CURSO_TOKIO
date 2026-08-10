document.getElementById("guardarLocal").addEventListener("click", () => {
    if (localStorage.getItem("M4_UD02_P02") !== null) {;
        alert("Error: ya existe un dato con esa clave");
    } else {
        localStorage.setItem("M4_UD02_P02", "Christopher Alvarez Enriquez");
        alert("Dato guardado correctamente");
    };
});

document.getElementById("guardarSession").addEventListener("click", () => {
    sessionStorage.setItem("Date", Date.now());
    alert("Fecha almacenada correctamente");
});

document.getElementById("mostrarDatos").addEventListener("click", () => {
    const nombre = localStorage.getItem("M4_UD02_P02")
    const fecha = sessionStorage.getItem("Date")

    alert(
        "localStorage:\n" +
        "Clave: M4_UD02_P02\n" +
        "Valor: " + nombre +
        "\n\n" +
        "sessionStorage:\n" +
        "Clave: Date\n" +
        "Valor: " + fecha
    );
});