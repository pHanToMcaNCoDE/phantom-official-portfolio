let menu = document.querySelector('.menu');
let links = document.querySelector('.links');

menu.addEventListener('click', () => {
    links.classList.add('active');
    links.style.transition = ".5s";
});