function CambiarColor() {

    var idcolor = document.getElementById('cboColores').value;
    var color;

    switch (idcolor) {
        case 'rojo':
            color = '#FF0000';
            break;
        case 'verde':
            color = '#00FF00';
            break;
        case 'azul':
            color = '#0000FF';
            break;
        case 'blanco':
            color = '#FFFFFF';
            break;
        case 'negro':
            color = '#000000';
            break;
    }

    var elemento = document.getElementById('cboElementos').value;
    document.getElementById(elemento).style.backgroundColor = color;
}

function Reiniciar() {
    location.reload();
}

var boton = document.getElementById('aceptar'); /* Creo variable global para usar en ambas funciones */
function AumentarTamaño() {
    boton.style.fontSize = 'x-large';
    boton.style.cursor = 'progress';
}

function DisminuirTamaño() {
    boton.style.fontSize = 'small';
}
