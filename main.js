const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btnCalcular = document.querySelector('#btnCalcular');
let result = document.querySelector('#result')

// Este lo usamos normalmente
// btnCalcular.addEventListener('click', btnOnClick);

// function btnOnClick () {
//     const suma = Number(input1.value) + Number(input2.value);
//     result.innerText = `El resultado de la suma es: ${suma}`;
// } 

// Usando desde un form, para evitar el valor por defecto del submit

form.addEventListener('submit', btnOnClick);

function btnOnClick (e) {
    e.preventDefault();
    const suma = Number(input1.value) + Number(input2.value);
    result.innerText = `El resultado de la suma es: ${suma}`;
} 