const yesButton = document.querySelector(".answer .yes");
const noButton = document.querySelector(".answer .no");
const gif1 = document.querySelector(".img1");
const gif2 = document.querySelector(".img2");



yesButton.addEventListener('click', function() {
    console.log('User clicked on Yes!');
    gif1.src = "./images/haapy(1).gif";
    gif2.src = "./images/happy(2).gif";
    noButton.disabled = true;
    noButton.style.top = 'auto';
    noButton.style.left = 'auto';
});

function getRandomPosition() {
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    return { top: randomY, left: randomX };
}

function moveNoButton() {
    const randomPosition = getRandomPosition();
    noButton.style.position = 'absolute';
    noButton.style.top = `${randomPosition.top}px`;
    noButton.style.left = `${randomPosition.left}px`;
}

noButton.addEventListener('mouseover', function() {
    console.log('User hovered over No!');
    moveNoButton();
});




