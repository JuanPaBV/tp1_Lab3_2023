let btnSeguir = document.getElementById('btn_seguir'); 
btnSeguir.addEventListener('click', seguir);

function seguir() {
    if (btnSeguir.innerText == 'Dejar de seguir') {
        btnSeguir.innerText = 'Seguir'
    }
    else btnSeguir.innerText = 'Dejar de seguir';
}

let btnMeGusta = document.getElementById('btn_meGusta');
btnMeGusta.addEventListener('click', meGusta);
let contador = document.getElementById('contador');
let clicked = false;

function meGusta() {
    if (!clicked) {
        clicked = true;
        contador.textContent++;
    }
    else {
        clicked = false;
        contador.textContent--;
    }
}

let btnComentar = document.getElementById('btnComentar');
btnComentar.addEventListener('click', agregarComentario);

function agregarComentario(evento) {
    evento.preventDefault();

    let textoComentario = document.getElementById('cajaComentarios').value;
    let usuario = document.getElementById('usuario').value;

    if (usuario.trim() === '') {
        alert('ERROR usuario no valido')
    }
    else if (textoComentario.trim() === '') {
        alert('ERROR comentario no valido')
    }
    else {
        let div=document.createElement('div')
        div.setAttribute('id', 'comentario_'+usuario)

        let texto = document.createTextNode(' ' + textoComentario)
        let span = document.createElement('span')
        span.appendChild(texto)

        let textoUsuario = document.createTextNode(usuario)
        let h4 = document.createElement('h4')
        h4.appendChild(textoUsuario)
        h4.style.fontWeight='bold'

        let btnEliminar = document.createElement('button')
        let textoEliminar = document.createTextNode('Eliminar')
        btnEliminar.appendChild(textoEliminar)
        btnEliminar.style.float='right'
        btnEliminar.setAttribute('id', 'btn_Eliminar')
        btnEliminar.setAttribute('onclick', 'eliminar()')

        div.appendChild(h4)
        div.appendChild(span)
        div.appendChild(btnEliminar)
        
        let br = document.createElement('br')

        document.getElementById('lista-de-comentarios').appendChild(div)
        document.getElementById('lista-de-comentarios').appendChild(br)
    }

    document.getElementById('cajaComentarios').value = '';
    document.getElementById('usuario').value = '';
}

function eliminar() {
    let usuario = document.getElementById('usuario').value;
    let div = document.getElementById('comentario_'+usuario)

    if (usuario.trim() === '') {
        alert ('Usuario incorrecto')
    }
    else {
        div.remove();
    }
}