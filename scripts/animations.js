
// --------------------------------------------------------------------
// ANIMATE GRAPH ON CLICK
// --------------------------------------------------------------------
let graphDiv = document.querySelector('#graph');
let bars = document.querySelectorAll('.graph-play');
let bottomLine = document.querySelector(".bottom-line");


function playGraphAnimation() {
    bars.forEach(bar => {
        bar.style.animationPlayState = 'running'
    });
};

graphDiv.addEventListener('click', playGraphAnimation);

// --------------------------------------------------------------------
// PLAY ANIMATION WITH TABINDEX AND ENTER KEY
// --------------------------------------------------------------------

// graphDiv.addEventListener("keyup", function(pressEnterTwice) {
//     if (pressEnterTwice.keyCode === 13) {
//         pressEnterTwice.preventDefault();
//         graphDiv.addEventListener('keyup', playGraphAnimation);
//     }
// });

// --------------------------------------------------------------------
// ANIMATE GRAPH ON MULTIPLE CLICKS
// --------------------------------------------------------------------

function playGraphAnimationAgain() {
    bars.forEach(bar => {
        bar.classList.add('yellow-bar', 'tall-green-bar', 'red-bar', 'light-green-bar', 'small-green-bar');
        bar.onanimationend = () => {
            bar.classList.remove('yellow-bar', 'tall-green-bar', 'red-bar', 'light-green-bar', 'small-green-bar');
        }
    });  
};
graphDiv.addEventListener("click", playGraphAnimationAgain);

// --------------------------------------------------------------------
// ANIMATE SHIP ON CLICK
// --------------------------------------------------------------------
let shipDiv = document.querySelector('#ship');
let playShip = document.querySelectorAll('.ship-play');

function playShipAnimation() {
    playShip.forEach(element => element.style.animationPlayState = 'running');
}

shipDiv.addEventListener('click', playShipAnimation);

// --------------------------------------------------------------------
// ANIMATE TOXIC ON CLICK
// --------------------------------------------------------------------
let toxicDiv = document.querySelector('#toxic');
let playToxic = document.querySelectorAll('.toxic-play');
let cranium = document.querySelector('.animate-again');

function playToxicAnimation() {
    playToxic.forEach(toxic => toxic.style.animationPlayState = 'running'
)};

toxicDiv.addEventListener('click', playToxicAnimation);