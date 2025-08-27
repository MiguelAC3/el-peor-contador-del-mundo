// Script para aumentar, multiplicar y dividir el número al hacer clic en los botones
const numeroSpan = document.getElementById('numero');
const btnIncrementar = document.getElementById('btnIncrementar');
const btnMultiplicar = document.getElementById('btnMultiplicar');
const btnDividir = document.getElementById('btnDividir');
let contador = 0;

btnIncrementar.addEventListener('click', () => {
	contador++;
	numeroSpan.textContent = contador;
});

btnMultiplicar.addEventListener('click', () => {
	contador *= 2;
	numeroSpan.textContent = contador;
});

btnDividir.addEventListener('click', () => {
	contador = Math.floor(contador / 2);
	numeroSpan.textContent = contador;
});
