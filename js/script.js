// BUSINESS LOGIC
// create a player 1 object
function firstPlayer(name, score, wins) {
  this.name = name;
  this.score = score;
  this.wins = wins;

};



// create a player 2 object
function secondPlayer(name, score, wins) {
  this.name = name;
  this.score = score;
  this.wins = wins;
};

var playerOne = new firstPlayer()




// pick a random number btn 1 and 6 for the roll of the die
var die = (Math.random()*6)+ 1;

// create a var that collects the random number
var dieNumber = Math.floor(die);

// set the score after a single roll

var score = parseInt("");

// if statement if the number is 1
var rollDice = function (dieNumber) {
  if (die === 1) {
    // return the score 0
    return score === 0;
    console.log(rollDice);
  }else {
    return score === dieNumber;
  }
}







// USER INETERFACE LOGIC




// skip to next player


// else statement if the die reads 2-6

// return score as 2-6

// get another turn

// check for winner when either players' score is 100



// declare the winner
