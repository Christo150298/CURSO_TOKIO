const generar_tabla = () => {
    const contenedor = document.getElementById('contenedor_tabla');
    contenedor.innerHTML = '';

    const tabla = document.createElement('table');
    tabla.style.borderCollapse = 'collapse';
    tabla.style.marginTop = '10px';

    const datos = [
        ['Continente', 'País 1', 'País 2'],
        ['América', 'Argentina', 'Brasil'],
        ['Europa', 'España', 'Francia'],
    ];

    for (let fila = 0; fila < datos.length; fila++) {
        const tr = document.createElement('tr');

        for (let col = 0; col < datos[fila].length; col++) {

            const celda = fila === 0 
                ? document.createElement('th') 
                : document.createElement('td');

            celda.style.border = '1px solid black';
            celda.style.padding = '5px 10px';
            celda.textContent = datos[fila][col];

            tr.appendChild(celda);
        }
        tabla.appendChild(tr);
    }
    contenedor.appendChild(tabla);
};

document.getElementById('btnGenerar').addEventListener('click', generar_tabla);