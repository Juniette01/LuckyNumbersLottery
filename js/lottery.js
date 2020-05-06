//Florida Lottery = 6 numbers (1-53)
//Powerball = 5 white ball numbers ( 1-69); 1 red ball number (1-26)


var lottery = [(Math.floor(Math.random()*53) + 1),
         " " + (Math.floor(Math.random()*53) + 1),
         " " + (Math.floor(Math.random()*53) + 1),
         " " + (Math.floor(Math.random()*53) + 1),
         " " + (Math.floor(Math.random()*53) + 1),
         " " + (Math.floor(Math.random()*53) + 1)];


   function randomLotteryNumbers(){

     for(var i = 0;i<6 ; i++){
     document.getElementById("lotteryNumbers").innerHTML = lottery;

}
}


var powerball = [(Math.floor(Math.random()*69) + 1),
         " " + (Math.floor(Math.random()*69) + 1),
         " " + (Math.floor(Math.random()*69) + 1),
         " " + (Math.floor(Math.random()*69) + 1),
         " " + (Math.floor(Math.random()*69) + 1),
         " " + (Math.floor(Math.random()*26) + 1)];


   function randomPowerballNumbers(){

     for(var i = 0;i<6 ; i++){
    document.getElementById("powerballNumbers").innerHTML = powerball;


}
}

//Checking if the user won the Lottery

    var winLuckyLotto = [(Math.floor(Math.random()*53) + 1),
             " " + (Math.floor(Math.random()*53) + 1),
             " " + (Math.floor(Math.random()*53) + 1),
             " " + (Math.floor(Math.random()*53) + 1),
             " " + (Math.floor(Math.random()*53) + 1),
             " " + (Math.floor(Math.random()*53) + 1)];

var luckyLottoNumbers = document.getElementById("luckyLottoNumbers");

var winLottery = "You win!"
var loseLottery = "Better luck next time!"

function winningLotteryNumbers() {

if (luckyLottoNumbers == winLuckyLotto){
  document.getElementById("luckyLottoNumbersOk").innerHTML = winLottery;
  console.log("Lottery Winner!");
  } else {
    (luckyLottoNumbers !== winLuckyLotto)
    document.getElementById("luckyLottoNumbersOk").innerHTML = loseLottery;
    console.log("Did not win Lottery");

  }
}


//Checking if the user won the Powerball

var winLuckyPowerball = [(Math.floor(Math.random()*53) + 1),
         " " + (Math.floor(Math.random()*53) + 1),
         " " + (Math.floor(Math.random()*53) + 1),
         " " + (Math.floor(Math.random()*53) + 1),
         " " + (Math.floor(Math.random()*53) + 1),
         " " + (Math.floor(Math.random()*53) + 1)];

var luckyPowerballNumbers = document.getElementById("luckyPowerballNumbers");

var winPowerball = "You win!"
var losePowerball = "Better luck next time!"

function winningPowerballNumbers() {

if (luckyLottoNumbers == winLuckyLotto){
document.getElementById("luckyPowerballNumbersOk").innerHTML = winPowerball;
console.log("Powerball Winner!");
} else {
(luckyPowerballNumbers !== winLuckyPowerball)
document.getElementById("luckyPowerballNumbersOk").innerHTML = losePowerball;
console.log("Did not win Powerball");

}
}
