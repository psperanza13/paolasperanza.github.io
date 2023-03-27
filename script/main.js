let miImage = document.querySelector('img');
    miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/firefox-icon.png') {
    miImage.setAttribute('src','imagenes/3902837.png');
    } else {
    miImage.setAttribute('src', 'imagenes/3902837.png');
    }
}


let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Bienvenido,' + miNombre;
}

    if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
    } else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Bienvenido,' + nombreAlmacenado;
}

miBoton.onclick = function() {
estableceNombreUsuario();
}

