let fruits = ['banan', 'apple', 'mango', 'pineapple', 'melon', 'lemon'];
//let newWord = null;
let newWord = fruits[Math.floor(Math.random() * 6)];
let container = document.querySelector('.word');
for (let letter of newWord) {
    let span = document.createElement('span');
    span.textContent = letter;
    container.append(span);
}

let index = 0;
document.addEventListener('keydown', function(event) {

    span = container.querySelectorAll('span')[index];
    let exceptedLetter = span.textContent;
    let actualLetter = event.key;

    if (exceptedLetter == actualLetter) {
        span.className = '';
        span.classList.add("c");
        index++;
    } else {
        span.className = '';
        span.classList.add("w");
    }
});