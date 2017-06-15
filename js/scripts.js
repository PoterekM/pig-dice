function Player (name, randomCurrent, total, grandTotal) {
  this.name = name;
  this.random = randomCurrent; //?
  this.total = total;
  this.grandTotal = grandTotal;
}



// Player.prototype.random = function() {

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

Player.prototype.fullStats = function() {
  return this.name + " " + this.turn + this.total
}

Player.prototype.grandTotal = function() {
  return this.total + this.grandTotal;
}


// console.log(randomNumber);

var playerOneTotal = 0;
var sparkleFarts = [];
for(i = 0; i <= playerOneTotal.length; i += 1) {
  sparkleFarts.push([i]);
  // console.log(playerOneTotal);
}
var playerTwoTotal = 0;
var sparkleFarts2 = [];
for(i = 0; i <= playerTwoTotal.length; i += 1) {
  sparkleFarts2.push([i]);
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
  var newPlayer1 = new Player(playerOne);
  var newPlayer2 = new Player(playerTwo);
  $("#user-one-name").text(playerOne);
  $("#user-two-name").text(playerTwo);
//returns player name
});
  $("#roll").click(function(event) {
    var firstRoll = getRandomIntInclusive(1, 6);
    var totalOne = playerOneTotal += firstRoll;
    $("#player-one-roll").text(firstRoll);
    $("#player-one-total").text(playerOneTotal);
    // if(firstRoll === 1) {
    //   playerOneTotal = 0;
    // } else if (totalOne >= 100) {
    //   alert("you win!")
  })


    $("#roll").click(function(event) {
      var firstRoll = getRandomIntInclusive(1, 6);
      var totalTwo = playerTwoTotal += firstRoll;
      $("#player-two-roll").text(firstRoll);
      $("#player-two-total").text(playerTwoTotal);
      // if(firstRoll === 1) {
      //   playerTwoTotal = 0;
      // } else if (totalTwo >= 100) {
      //   alert("you win!")
    })
  });
    console.log(playerOneTotal);

    $("#hold").on('click',function(event) {
      $("#turn").toggleClass("a");
      // alert(turn)
    });

// console.log(firstRoll);
