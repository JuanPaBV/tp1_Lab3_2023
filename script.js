let btnSeguir = document.getElementById('btn_seguir'); 
btnSeguir.addEventListener('click', seguir)

function seguir() {
    if (btnSeguir.innerText == 'Dejar de seguir') {
        btnSeguir.innerText = 'Seguir'
    }
    else btnSeguir.innerText = 'Dejar de seguir';
}

