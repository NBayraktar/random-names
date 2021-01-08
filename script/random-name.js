let section = document.querySelector('section');
let btn = document.querySelector('button');
let para = document.querySelector('p');
let names = ['Marilyn Monroe', 'Abraham Lincoln', 'Queen Elizabeth II', 'Barack Obama', 'Henry Ford', 'Michael Jordon', 'Adolf Hitler', 'Michael Jackson', 'Cleopatra', 'Margaret Thatcher', 'Ronald Reagan', 'Indira Gandhi'];

btn.onclick = function() {
    let randomName = names[Math.floor(Math.random() * names.length)];
    para.textContent = randomName; 
}

section.appendChild(para);