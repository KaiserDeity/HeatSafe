function registro(){
    const nombre1 = document.getElementById('nombre').value;
    const correo1 = document.getElementById('correo').value;
    const usuario1 = document.getElementById('usuario').value;
    const contrasena1 = document.getElementById('contrasena').value;

    console.log(nombre1, correo1, usuario1, contrasena1)

    localStorage.correo = correo1;
    localStorage.contrasena = contrasena1;
    localStorage.usuario = usuario1;

    alert("Datos guardados, puedes iniciar sesion")
}

function entrar(){
    const corre = document.getElementById("correoElectronico").value;
    const contra = document.getElementById("contrasenaEntrar").value;
    const correo1 = document.getElementById('correo').value;
    const contrasena1 = document.getElementById('contrasena').value;

    console.log(corre, contra);

    if (corre == correo1 && contra == contrasena1) {
        location.href = "index.html";
    }
    else {
        alert("Datos Incorrectos")
    }
}