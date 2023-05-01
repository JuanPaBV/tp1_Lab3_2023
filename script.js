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