var randomNumber = "";
function getRandomIntInclusive(min, max) {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}


















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
    alert(randomNumber);
  });
  $("#hold").click(function(event) {
    alert("turds!")
  });



});
});
