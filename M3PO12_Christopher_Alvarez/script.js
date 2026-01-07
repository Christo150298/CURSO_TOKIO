document.getElementById("formulario").addEventListener("submit", function(event){;

    event.preventDefault();

    let usuario = document.getElementById("usuario").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;

    let expresionEmail = /^([a-zA-Z0-9_\.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
       
    if (usuario.length < 4) {
        alert("El nombre de usuario debe tener al menos 4 caracteres.");
        return;
    }
    if (!expresionEmail.test(email)) {
        alert("El correo electrónico no es válido.");
        return;
    }
    if (password.length < 6 || password.length > 12) {
        alert("La contraseña debe tener entre 6 y 12 caracteres.");
        return;
    }
    if (password !== password2) {
        alert("Las contraseñas no coinciden.");
        return;
    }
    alert("Formulario enviado correctamente.");
});

