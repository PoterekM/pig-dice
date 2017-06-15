function Player (name) {
  this.name = name;
  this.currentRoll = 0; //?
  this.total = 0;
  this.grandTotal = 0;
}

Player.prototype.eachRoll = function () {
  min = Math.ceil(1);
  max = Math.floor(6);
  this.currentRoll = Math.floor(Math.random() * (max - min + 1)) + min;
  return this.currentRoll;
}


Player.prototype.shortHand = function () {
  this.total += this.currentRoll;
  return this.total;
  console.log(total);
}
console.log();

Player.prototype.totalMaker = function() {
  this.grandTotal += this.currentRoll;
  return this.grandTotal;
  console.log(grandTotal);
}
console.log();

// var playerOneTotal = 0;
// var sparkleFarts = [];
// for(i = 0; i <= playerOneTotal.length; i += 1) {
//   sparkleFarts.push([i]);
//   // console.log(playerOneTotal);
// }
// var playerTwoTotal = 0;
// var sparkleFarts2 = [];
// for(i = 0; i <= playerTwoTotal.length; i += 1) {
//   sparkleFarts2.push([i]);
//   // console.log(playerOneTotal);
// }

/////////DO NOT CROSS...DO NOT CROSS...///////////

$(document).ready(function() {
  var newPlayer1;
  var newPlayer2;
$("#userinput").submit(function(event) {
  event.preventDefault();
  newPlayer1 = new Player(playerOne);
  newPlayer2 = new Player(playerTwo);

  var playerOne = $("input#player-one-name").val();
  var playerTwo = $("input#player-two-name").val();
  $("#user-one-name").text(playerOne);
  $("#user-two-name").text(playerTwo);
//returns player name
});
  $("#roll-user-one").click(function(event) {
    var grandTotal = (newPlayer1.totalMaker());
    var firstRoll = (newPlayer1.eachRoll());
    var rollin = (newPlayer1.shortHand());

    $("#player-one-roll").text(firstRoll);
    $("#player-one-total").text(rollin);

    console.log(rollin);
  });


    $("#roll-user-two").click(function(event) {
        var grandTotal = (newPlayer1.totalMaker());
      var firstRoll = (newPlayer2.eachRoll());
      var rollin = (newPlayer2.shortHand());
    $("#player-two-roll").append(firstRoll);
      $("#player-two-total").text(rollin);
    })

    $("#hold-user-one").on('click',function(event) {
      $("#turn").toggleClass("a");
      alert("turn");
    });
    $("#hold-user-two").on('click',function(event) {
      $("#turn").toggleClass("a");
      alert("turn");
    });

  });
