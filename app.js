let num = 42; //number
let firstName = 'Diana'; //string
const isProgrammer = true; //boolean

/* вот пример блока в vscode
a
мы можем его свернуть и развернуть
p
*/

//console.log(resultElement.textContent);
//resultElement.textContent = 42;

const resultElement = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitBtn = document.getElementById('submit');
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = '+' 


plusBtn.onclick = function () {
    action = '+'
}
minusBtn.onclick = function () {
    action = '-'
}

//document.getElementsByClassName('WannaBeBorderRadius').style.borderRadius = '5px';

submitBtn.onclick = function () {
    if (action == '+') {
        const sum = Number(input1.value) + Number(input2.value);
resultElement.textContent = sum;
if (sum > 0) {resultElement.style.backgroundColor = 'LightGreen'}
else {resultElement.style.backgroundColor = 'Tomato'}
}
   else {
    const sum = Number(input1.value) - Number(input2.value);
resultElement.textContent = sum;
if (sum > 0) {resultElement.style.backgroundColor = 'LightGreen'}
else {resultElement.style.backgroundColor = 'Tomato'}
   }
}