class Persona {
    constructor(nombre, apellidos, edad) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }
}

const personas = [];

const PersonaFuncion = () => {
    for (let i = 0; i < 5; i++) {
        const nombre = prompt(`Ingrese el nombre de la persona ${i + 1}:`);
        const apellidos = prompt(`Ingrese los apellidos de la persona ${i + 1}:`);
        let edad;
        do {
            edad = prompt(`Ingrese la edad de la persona ${i + 1}:`);
            edad = parseInt(edad);
        } while (isNaN(edad) || edad <= 0);

        const persona = new Persona(nombre, apellidos, edad);
        personas.push(persona);
    }
}

const mostrarPersonas = () => {
    const div = document.getElementById('resultado');
    if (personas.length === 0) {
        div.textContent = "No hay personas almacenadas.";
        return;
    }

    let contenido = '<ul>';
    personas.forEach((p, index) => {
        contenido += `<li><strong>Persona ${index + 1}:</strong> ${p.nombre} ${p.apellidos}, Edad: ${p.edad}</li>`;
    });
    contenido += '</ul>';

    div.innerHTML = contenido;
}

document.getElementById('btnAñadir').addEventListener('click', PersonaFuncion);
document.getElementById('btnMostrar').addEventListener('click', mostrarPersonas);