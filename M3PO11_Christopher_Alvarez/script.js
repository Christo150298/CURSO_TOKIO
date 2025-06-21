const mostrarFechaHora = () => {
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    const ahora = new Date();
    const diaSemana = dias[ahora.getDay()];
    const dia = ahora.getDate();
    const mes = meses[ahora.getMonth()];
    const año = ahora.getFullYear();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');

    const texto = `Hoy es ${diaSemana}, ${dia} de ${mes} de ${año}, y son las ${horas}:${minutos} horas.`;

    document.getElementById('fechaHora').textContent = texto;
}

setInterval(mostrarFechaHora, 1000);

mostrarFechaHora();