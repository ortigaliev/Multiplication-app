const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);



const questionEl = document.getElementById("question");

questionEl.innerText = 'What is ' +num1+ ' multiply by ' +num2+ ' ?';