// Script para aumentar y multiplicar el número al hacer clic en los botones
const numeroSpan = document.getElementById('numero');
const btnIncrementar = document.getElementById('btnIncrementar');
const btnMultiplicar = document.getElementById('btnMultiplicar');
let contador = 0;

btnIncrementar.addEventListener('click', () => {
	contador++;
	numeroSpan.textContent = contador;
});

btnMultiplicar.addEventListener('click', () => {
	contador *= 2;
	numeroSpan.textContent = contador;
});
