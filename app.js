const colors = ["green", "red", "yellow", "pink"];

const btn = document.getElementById('btn');
const nameColor = document.querySelector('.color')

btn.addEventListener('click', () => {

    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];

    nameColor.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

