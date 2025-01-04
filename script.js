const boxes = document.querySelectorAll('.box');
const resetBtn  = document.querySelector('.reset-button');
const newBtn = document.querySelector('.new-button');
const msgContainer = document.querySelector('.msg-container');
const msg = document.querySelector('#msg');

let turnO = true;

const winPatterns = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
  box.addEventListener("click",() => {
    if(turnO){
      box.innerText = 'O';
      turnO = false;
    }
    else{
      box.innerText = 'X';
      turnO = true;
    }
    box.disabled = true;
    // this box.disabled = true; is only work with buttons or imput or textarea

    checkWinner();
  });
});

const disableBoxes = () => {
  for(let box of boxes){
    box.disabled = true;
  }
}

const enableBoxes = () => {
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
}

const showWinner = (winner) => {
  msg.innerText = `Winner is ... ${winner}`
  msgContainer.classList.remove('hide');
  disableBoxes();
}

const checkWinner = () => {
  for(pattern of winPatterns){
      let pos1val = boxes[pattern[0]].innerText;
      let pos2val = boxes[pattern[1]].innerText;
      let pos3val = boxes[pattern[2]].innerText;
      if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val == pos2val && pos2val == pos3val){
          showWinner(pos1val);
        }
      }
  }
}

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
