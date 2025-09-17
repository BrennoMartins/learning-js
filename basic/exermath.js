const numero = Number(prompt("Digite seu Numero"));
const numeroTitulo = document.getElementById('numero');
const texto = document.getElementById('texto');
const raiz = document.getElementById('raiz');
const inteiro = document.getElementById('inteiro');
const nan = document.getElementById('nan');
const roundDown = document.getElementById('round-down');
const roundUp = document.getElementById('round-up');
const duasDecimal = document.getElementById('duas-decimal');

numeroTitulo.innerHTML = numero;
raiz.innerHTML = `<p> Raiz Quadrada: ${numero * numero}</p>`
inteiro.innerHTML = `<p> ${numero} é inteiro:  ${Number.isInteger(numero)}</p>`
nan.innerHTML = `<p> NaN:  ${Number.isNaN(numero)}</p>`
roundDown.innerHTML = `<p> Arredondado para baixo: ${Math.floor(numero)}</p>`
roundUp.innerHTML = `<p> Arredondado para cima ${Math.ceil(numero)}</p>`
duasDecimal.innerHTML = `<p> Com duas casas decimais: ${numero.toFixed(2)}</p>`