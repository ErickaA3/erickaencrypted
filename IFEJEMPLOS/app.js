var segundoInicio = 5;

function actualizar() {
    document.getElementById("countdown").innerHTML = segundoInicio;

    if (segundoInicio == 0) {
        document.getElementById("countdown").innerHTML = "FIN";
    } else {
        //segundoInicio-=1
        segundoInicio = segundoInicio -1;
        setTimeout(actualizar, 1E3);
    }
}

actualizar();