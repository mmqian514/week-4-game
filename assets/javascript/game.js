//variables
var randomNumber = Math.floor(Math.random() * 102) + 19;
var crystal1 = Math.ceil(Math.random() * 12);
var crystal2 = Math.ceil(Math.random() * 12);
var crystal3 = Math.ceil(Math.random() * 12);
var crystal4 = Math.ceil(Math.random() * 12);
var scoreCounter = 0;
var winCounter = 0;
var lossCounter = 0;


//functions
function reset() {
  randomNumber = Math.floor(Math.random() * 101) + 19;
  crystal1 = Math.ceil(Math.random() * 12);
  crystal2 = Math.ceil(Math.random() * 12);
  crystal3 = Math.ceil(Math.random() * 12);
  crystal4 = Math.ceil(Math.random() * 12);
  scoreCounter = 0;
};


//logic
$(document).ready(function() {
  $('#target').text(randomNumber);
  $('#crystal1').on('click', function() {
    scoreCounter += crystal1;
    $('#score').text(scoreCounter);
    if (scoreCounter===randomNumber) {
      winCounter++;
      $('#wins').html("<h4>Wins: " + winCounter + "<h4>");
      reset();
      $('#target').text(randomNumber);
      $('#score').text(scoreCounter);
    } else if (scoreCounter > randomNumber) {
      lossCounter++;
      $('#losses').html("<h4>Losses: " + lossCounter + "<h4>");
      reset();
      $('#target').text(randomNumber);
      $('#score').text(scoreCounter);
    }
  });
  $('#crystal2').on('click', function() {
    scoreCounter += crystal2;
    $('#score').text(scoreCounter);
    if (scoreCounter===randomNumber) {
      winCounter++;
      $('#wins').html("<h4>Wins: " + winCounter + "<h4>");
      reset();
      $('#target').text(randomNumber);
      $('#score').text(scoreCounter);
    } else if (scoreCounter > randomNumber) {
      lossCounter++;
      $('#losses').html("<h4>Losses: " + lossCounter + "<h4>");
      reset();
      $('#target').text(randomNumber);
      $('#score').text(scoreCounter);
    }
  });
  $('#crystal3').on('click', function() {
    scoreCounter += crystal3;
    $('#score').text(scoreCounter);
    if (scoreCounter===randomNumber) {
      winCounter++;
      $('#wins').html("<h4>Wins: " + winCounter + "<h4>");
      reset();
      $('#target').text(randomNumber);
      $('#score').text(scoreCounter);
    } else if (scoreCounter > randomNumber) {
      lossCounter++;
      $('#losses').html("<h4>Losses: " + lossCounter + "<h4>");
      reset();
      $('#target').text(randomNumber);
      $('#score').text(scoreCounter);
    }
  });
  $('#crystal4').on('click', function() {
    scoreCounter += crystal4;
    $('#score').text(scoreCounter);
    if (scoreCounter===randomNumber) {
      winCounter++;
      $('#wins').html("<h4>Wins: " + winCounter + "<h4>");
      reset();
      $('#target').text(randomNumber);
      $('#score').text(scoreCounter);
    } else if (scoreCounter > randomNumber) {
      lossCounter++;
      $('#losses').html("<h4>Losses: " + lossCounter + "<h4>");
      reset();
      $('#target').text(randomNumber);
      $('#score').text(scoreCounter);
    }
  });
});