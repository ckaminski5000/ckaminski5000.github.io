let allGameBoxes = document.querySelectorAll(".tictacBoxes");
let counter = 0;

const Player = (name, image, boxId) => {
  return {
    name: name,
    image: image,
    play: false,
    winner: false,
    boxId: boxId,
    get displayGamePiece() {
      const img = document.createElement("img");
      img.src = this.image;
      img.className += "imageSize";
      return img;
    },
    determineWinner() {
        if(document.getElementById('box1').className.includes(this.boxId) &&
           document.getElementById('box5').className.includes(this.boxId) &&
           document.getElementById('box9').className.includes(this.boxId) ){
            this.winner = true;
           }
            else if(document.getElementById('box3').className.includes(this.boxId) &&
           document.getElementById('box7').className.includes(this.boxId) &&
           document.getElementById('box5').className.includes(this.boxId) ){
            this.winner = true;
           }
           else if(document.getElementById('box1').className.includes(this.boxId) &&
           document.getElementById('box2').className.includes(this.boxId) &&
           document.getElementById('box3').className.includes(this.boxId) ){
             this.winner = true;
           }
           else if(document.getElementById('box4').className.includes(this.boxId) &&
           document.getElementById('box5').className.includes(this.boxId) &&
           document.getElementById('box6').className.includes(this.boxId) ){
            this.winner = true;
           }
           else if(document.getElementById('box7').className.includes(this.boxId) &&
           document.getElementById('box8').className.includes(this.boxId) &&
           document.getElementById('box9').className.includes(this.boxId) ){
            this.winner = true;
           }
           else if(document.getElementById('box1').className.includes(this.boxId) &&
           document.getElementById('box4').className.includes(this.boxId) &&
           document.getElementById('box7').className.includes(this.boxId) ){
            this.winner = true;
           }
           else if(document.getElementById('box2').className.includes(this.boxId) &&
           document.getElementById('box5').className.includes(this.boxId) &&
           document.getElementById('box8').className.includes(this.boxId) ){
            this.winner = true;
           }
           else if(document.getElementById('box3').className.includes(this.boxId) &&
           document.getElementById('box6').className.includes(this.boxId) &&
           document.getElementById('box9').className.includes(this.boxId) ){
            this.winner = true;
           }
           else{
               this.winner = false;
           }

    },
  };
};

Minnie = Player("Minnie", "./MinnieBow.png", 'clickedMinnie');
Mickey = Player("Mickey", "./mickeyPink.png", 'clickedMickey');



function gamePlay() {
    Mickey.play = true;
      allGameBoxes.forEach(function (piece) {
    piece.addEventListener("click", function (e) {
      if (Mickey.play === true && !piece.className.includes('clickedMinnie') && !piece.className.includes('clickedMickey')) {
        let displayItem = Mickey.displayGamePiece;
        piece.innerHTML = "";
        piece.appendChild(displayItem);
        Mickey.play = false;
        Minnie.play = true;
        piece.classList.add('clickedMickey');
        counter++;
      } 
      else if(Minnie.play === true && !piece.className.includes('clickedMickey')  && !piece.className.includes('clickedMinnie')) {
        let displayItem = Minnie.displayGamePiece;
        piece.innerHTML = "";
        piece.appendChild(displayItem);
        Mickey.play = true;
        Minnie.play = false;
        piece.classList.add('clickedMinnie');
        counter++;
      }
      else if(piece.className.includes() === 'clickedMickey'){
        let displayItem = Mickey.displayGamePiece;
        piece.innerHTML = "";
        piece.appendChild(displayItem);
        counter++;
      }
      else if(piece.className.includes() === 'clickedMinnie'){
        let displayItem = Minnie.displayGamePiece;
        piece.innerHTML = "";
        piece.appendChild(displayItem);
        counter++;
      }

      Mickey.determineWinner();
      Minnie.determineWinner();
      displayWinner();

      

      })
//PlayAgain button
document.getElementById('playAgain').addEventListener('click', e => {
  piece.classList.remove('clickedMickey');
  piece.classList.remove('clickedMinnie');
  piece.innerHTML = '';
  document.getElementById('display').innerHTML = '';
  document.getElementById('playAgain').style.visibility = 'hidden';
  counter = 0;
    });
  });
  

}

gamePlay();

const displayWinner = () => {
  if(Mickey.winner === true){
    document.getElementById('display').innerHTML += "The Mickey Player is the winner!  Click the button below to play again.";
    document.getElementById('playAgain').style.visibility = 'visible';
  }
  else if(Minnie.winner === true){
    document.getElementById('display').innerHTML += "The Minnie Player is the winner!  Click the button below to play again."
    document.getElementById('playAgain').style.visibility = 'visible';
  }
  else if(counter === 9 && Mickey.winner === false && Minnie.winner === false){
    document.getElementById('display').innerHTML += "It's a Cat's Game!  Click the button below to play again."
    document.getElementById('playAgain').style.visibility = 'visible';
  }
}



const togglePlayer = () => {
    let toggleBtn = document.getElementById('toggle')
    let player1Box = document.getElementById('toggle1');
    let player2Box = document.getElementById('toggle2');
    let count = 1;

    player1Box.appendChild(Mickey.displayGamePiece);
    player2Box.appendChild(Minnie.displayGamePiece);

    toggleBtn.addEventListener('click', function(e) {
      
      if(count % 2 == 1){
      player1Box.innerHTML = '';
      player2Box.innerHTML = '';
      player2Box.appendChild(Mickey.displayGamePiece);
      player1Box.appendChild(Minnie.displayGamePiece);
      count++;
      Mickey.play = false;
      Minnie.play = true;
      }
      else{
        player1Box.innerHTML = '';
      player2Box.innerHTML = '';
        player1Box.appendChild(Mickey.displayGamePiece);
     player2Box.appendChild(Minnie.displayGamePiece);
     count++;
     Mickey.play = true;
      Minnie.play = false;

      }
    })
}
togglePlayer();


