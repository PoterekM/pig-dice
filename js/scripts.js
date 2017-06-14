

















/////////DO NOT CROSS...DO NOT CROSS...///////////

$(document).ready(function() {
$("#userinput").submit(function(event) {
  event.preventDefault();

  var playerOne = $("input#player-one-name").val();
  var playerTwo = $("input#player-two-name").val();

  console.log("boop");
$("#user-one-name").text(playerOne);
$("#user-two-name").text(playerTwo);

  console.log(playerOne);
});
});
