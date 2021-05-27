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

    switch (true) {
        case document.getElementById('tablaPrincipal').checked:
            elemento = 'tablaPrincipal';
            break;
        case document.getElementById('fila').checked:
            elemento = 'fila';
            break;
        case document.getElementById('celda1').checked:
            elemento = 'tdcelda1';
            break;
        case document.getElementById('celda2').checked:
            elemento = 'tdcelda2';
            break;
        case document.getElementById('contenedor').checked:
            elemento = 'contenedor';
            break;

    }
    document.getElementById(elemento).style.backgroundColor = color;
}

function Reiniciar() {
    location.reload();
}

window.onload = function () {
    {
        var boton = document.getElementById('aceptar');

        boton.onmouseover = AumentarTamaño;
        boton.onmouseout = DisminuirTamaño;
    }

    function AumentarTamaño() {
        document.getElementById(this.id).style.fontSize = 'x-large';
        document.getElementById(this.id).style.cursor = 'progress';
    }

    function DisminuirTamaño() {
        document.getElementById(this.id).style.fontSize = 'small';
    }
}
