const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

console.log(num1)
console.log(num2)

const questionEl = document.getElementById("question");

questionEl.innerText = 'What is' num1 'multiply by' num2'?';