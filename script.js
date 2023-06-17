const form = document.getElementById('form');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btnCalcular = document.getElementById('btnCalcular');
const result = document.getElementById('result');

btnCalcular.addEventListener('click', addition);

function addition(){
    result.innerText = parseInt(input1.value) + parseInt(input2.value);
}