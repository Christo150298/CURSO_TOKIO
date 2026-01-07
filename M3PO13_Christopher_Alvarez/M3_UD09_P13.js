const contarEnlaces = () => {
    const enlaces = document.getElementsByTagName("a");
    alert("La página contiene " + enlaces.length + " enlaces.");
};

const penultimoEnlace = () => {
    const enlaces = document.getElementsByTagName("a");
    const penultimo = enlaces[enlaces.length - 2];
    alert("El penúltimo enlace apunta a: " + penultimo.href);
};

const enlacesTwitter = () => {
    const enlaces = document.getElementsByTagName("a");
    let contador = 0;

    for (let i = 0; i < enlaces.length; i++) {
        if (enlaces[i].href === "https://www.twitter.com/") {
            contador++;
        }
    }

    alert("Hay " + contador + " enlaces que dirigen a https://www.twitter.com");
};

const enlacesTercerParrafo = () => {
    const parrafos = document.getElementsByTagName("p");
    const tercerParrafo = parrafos[2]; // índice 2 = tercer párrafo
    const enlaces = tercerParrafo.getElementsByTagName("a");

    alert("El tercer párrafo contiene " + enlaces.length + " enlaces.");
};