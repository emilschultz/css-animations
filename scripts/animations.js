// --------------------------------------------------------------------
// ANIMATE GRAPH ON CLICK
// --------------------------------------------------------------------
let graphDiv = document.querySelector('#graph');
let bars = document.querySelectorAll('.graph-play');
let bottomLine = document.querySelector('.bottom-line');

function playGraphAnimation() {
  bars.forEach((bar) => {
    bar.style.animation = 'none';
  });

  void graphDiv.offsetWidth;

  bars.forEach((bar) => {
    bar.style.animation = '';
    bar.style.animationPlayState = 'running';
  });
}

graphDiv.addEventListener('click', playGraphAnimation);

// --------------------------------------------------------------------
// ANIMATE GRAPH ON MULTIPLE CLICKS
// --------------------------------------------------------------------

// function playGraphAnimationAgain() {
//   bars.forEach((bar) => {
//     bar.classList.add(
//       'yellow-bar',
//       'tall-green-bar',
//       'red-bar',
//       'light-green-bar',
//       'small-green-bar'
//     );
//     bar.onanimationend = () => {
//       bar.classList.remove(
//         'yellow-bar',
//         'tall-green-bar',
//         'red-bar',
//         'light-green-bar',
//         'small-green-bar'
//       );
//     };
//   });
// }
// graphDiv.addEventListener('click', playGraphAnimationAgain);

// --------------------------------------------------------------------
// ANIMATE SHIP ON CLICK
// --------------------------------------------------------------------
let shipDiv = document.querySelector('#ship');
let playShip = document.querySelectorAll('.ship-play');
let text = document.querySelectorAll('.ship-text');

function playShipAnimation() {
  // Fjern animationen fra alle elementer med klassen .ship-play
  playShip.forEach((element) => {
    element.style.animation = 'none';
  });

  // Trigger en reflow for at sikre, at animationen starter fra begyndelsen
  void shipDiv.offsetWidth;

  // Tilføj animationen tilbage for elementerne med .ship-play
  playShip.forEach((element) => {
    element.style.animation = ''; // Genskab animationen
    element.style.animationPlayState = 'running'; // Start animationen
  });
  text.forEach((t) => {
    t.classList.remove('ship-play');
  });
}

shipDiv.addEventListener('click', playShipAnimation);

// --------------------------------------------------------------------
// ANIMATE TOXIC ON CLICK
// --------------------------------------------------------------------
let toxicDiv = document.querySelector('#toxic');
let playToxic = document.querySelectorAll('.toxic-play');
let cranium = document.querySelector('.animate-again');

function playToxicAnimation() {
  playToxic.forEach((element) => {
    element.style.animation = 'none';
  });

  void toxicDiv.offsetWidth;

  playToxic.forEach((element) => {
    element.style.animation = '';
    element.style.animationPlayState = 'running';
  });
}

toxicDiv.addEventListener('click', playToxicAnimation);
