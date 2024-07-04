document.getElementById('btnRestart').addEventListener('click', () =>{
    let contador = document.getElementById('numero');
    contador.textContent = 0;
    validarContador(contador.textContent);
});

document.getElementById('btnAdd').addEventListener('click', () =>{
    let contador = document.getElementById('numero');
    contador.textContent =  parseInt(contador.textContent) + 1;
    validarContador(parseInt(contador.textContent));
});

document.getElementById ('btnSubtract'). addEventListener ('click', () =>{
    let contador = document.getElementById('numero');
    contador.textContent = parseInt (contador.textContent) - 1;
    validarContador(contador.textContent);
});

function validarContador(numero){
    if(numero == 0){
        document.body.style.background = 'white';
        document.getElementById('title').style.color = 'black';
    }else if(numero > 0){
        document.body.style.background = '#02D966';
        document.getElementById('title').style.color = 'white';
    }else if(numero < 0){
        document.getElementById('title').style.color = 'white';
        document.body.style.background = '#BF0413';

    }
}

