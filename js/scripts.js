// function Roll (playerOne, totalOne, newRoll) {
//   this.playerOne = playerOneName;
//   this.totalOne = OneTurn;
//   this.newRoll = [];
// } more on this TOMORROW


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(randomNumber);

var playerOneTotal = 0;
var playerTwoTotal = [];
var sparkleFarts = [];
for(i = 0; i <= playerOneTotal.length; i += 1) {
  sparkleFarts.push([i]);
  // console.log(playerOneTotal);
}


// console.log(sparkleFarts);
// console.log(firstRoll);




/////////DO NOT CROSS...DO NOT CROSS...///////////

$(document).ready(function() {
$("#userinput").submit(function(event) {
  event.preventDefault();

  var playerOne = $("input#player-one-name").val();
  var playerTwo = $("input#player-two-name").val();
  $("#user-one-name").text(playerOne);
  $("#user-two-name").text(playerTwo);
//returns player name
  $("#roll").click(function(event) {
    var firstRoll = getRandomIntInclusive(1, 6);
    var totalOne = playerOneTotal += firstRoll; //make into variable eventually
    $("#player-one-roll").text(firstRoll);
    $("#player-one-total").text(playerOneTotal);
    // newRoll = new Roll(playerOne, totalOne, newRoll); MORE ON THIS TOMORROW
    console.log(playerOneTotal);
    if(firstRoll === 1) {
      playerOneTotal = 0;
    } else if (totalOne >= 100) {
      alert("you win!")
    }
// console.log(firstRoll);
  });
  $("#hold").click(function(event) {
    alert("turds!")
  });





});
});
