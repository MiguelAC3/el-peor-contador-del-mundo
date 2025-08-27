// Script para aumentar el número al hacer clic en el botón
const numeroSpan = document.getElementById('numero');
const btnIncrementar = document.getElementById('btnIncrementar');
let contador = 0;

btnIncrementar.addEventListener('click', () => {
	contador++;
	numeroSpan.textContent = contador;
});
