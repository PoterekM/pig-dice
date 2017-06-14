var randomNumber = "";
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomNumber);









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
    //var firstRoll = getRandomIntInclusive(1, 6);
    var firstRoll = getRandomIntInclusive(1, 6);
console.log(firstRoll);
  });
  $("#hold").click(function(event) {
    alert("turds!")
  });




});
});
