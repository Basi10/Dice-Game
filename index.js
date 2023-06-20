window.onload = function () {
  // Generate a random number between 1 and 100
  let diceNumber = Math.floor(Math.random() * 6) + 1;
  let diceNumber2 = Math.floor(Math.random() * 6) + 1;
  // Display the random number
  const imageElement = document.querySelector('.img1');
  imageElement.src = 'images/dice' + diceNumber + '.png';

  const imageElement2 = document.querySelector('.img2');
  imageElement2.src = 'images/dice' + diceNumber2 + '.png';

  if (diceNumber > diceNumber2) {
    document.querySelector('h1').innerHTML =
      '<i class="fa-solid fa-flag-checkered"></i> Player 1 Wins';
  } else if (diceNumber < diceNumber2) {
    document.querySelector('h1').innerHTML =
      'Player 2 Wins <i class="fa-solid fa-flag-checkered"></i>';
  } else {
    document.querySelector('h1').innerHTML = 'Draw';
  }
};
