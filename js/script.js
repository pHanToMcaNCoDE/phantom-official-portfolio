let menu = document.querySelector('.menu');
let links = document.querySelector('.links');
let x = document.querySelector('.x');

menu.addEventListener('click', () => {
    links.classList.add('active');
    links.style.transition = ".5s";
});

x.addEventListener('click', () =>{
    links.classList.remove('active');
    links.style.transition = '.5s';
});