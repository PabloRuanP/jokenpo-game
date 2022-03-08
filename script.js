const paperPlayer2 = document.querySelector(' .paperP2');
const rockPlayer2 = document.querySelector(' .rockP2');
const scissorsPlayer2 = document.querySelector(' .scissorsP2');
const resultWin = document.querySelector(' #result');
const counterPlayerResult = document.querySelector(' .counterPlayer');
const counterComputerResult = document.querySelector(' .counterComputer');

let counterPlayer1 = 0;
let counterComputer = 0;

function reset() {

  counterComputerResult.innerHTML = 0;
  counterPlayerResult.innerHTML = 0;
  counterComputer = 0;
  counterPlayer1 = 0;
  paperPlayer2.style.opacity = '';
  rockPlayer2.style.opacity = '';
  scissorsPlayer2.style.opacity = '';
  resultWin.innerHTML = '&nbsp';
  
}

function select(choiceItem) {

  
  let randomNumber = Math.floor(Math.random() * 3);

  paperPlayer2.style.opacity = '';
  rockPlayer2.style.opacity = '';
  scissorsPlayer2.style.opacity = '';
  

  switch (randomNumber) {

    case 0 :
      var paperP2 = randomNumber;
      paperPlayer2.style.opacity = 1;
      break;
    
    case 1 :
      var rockP2 = randomNumber;
      rockPlayer2.style.opacity = 1;
      break;
    
    case 2 :
      var scissorsP2 = randomNumber;
      scissorsPlayer2.style.opacity = 1;
      break;      
  }

  if ( (choiceItem == paperP2) || (choiceItem == rockP2) || (choiceItem == scissorsP2)) {

    resultWin.innerHTML = 'Draw !!'

  } else if (((choiceItem > 1) && (paperP2 == 0)) || (((choiceItem == 0) && (rockP2 == 1)) || ((choiceItem === 1) && (scissorsP2 == 2)))) {

    resultWin.innerHTML = 'Player 1 Wins !!'
    counterPlayer1++
    counterPlayerResult.innerHTML = `${counterPlayer1}`;
    

  } else {

    resultWin.innerHTML = 'Computer Wins !!'
    counterComputer++
    counterComputerResult.innerHTML = `${counterComputer}`;

  }
  
}
