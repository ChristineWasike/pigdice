// BUSINESS LOGIC
// create a player 1 object
// create a player 2 object
function Player(name, score, wins) {
  this.name = name;
  this.score = score;
  this.wins = wins;

};

var playerOne = new Player();
var playerTwo = new Player();



function Game(currentScore, finalScore) {
  this.currentScore = currentScore
  this.finalScore = finalScore
}




// pick a random number btn 1 and 6 for the roll of the die
// create a var that collects the random number
// set the score after a single roll
var die = Math.floor((Math.random()*6)+ 1) ;


// if statement if the number is 1
var rollDice = function (die) {
  if (die === 1) {
    // return the score 0


  }else {
  score += die;
  }
}







// USER INETERFACE LOGIC


$(document).ready(function () {
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});





// skip to next player


// else statement if the die reads 2-6

// return score as 2-6

// get another turn

// check for winner when either players' score is 100



// declare the winner
