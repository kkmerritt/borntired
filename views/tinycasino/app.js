//Tiny Disco Javascript File
setTimeout(play, 20)

function play() {

  cash = 100;

  $(".coin-button").on("click", function(){
    var coin = $(this).attr("data-coin");
    coinPick(coin);})

    $(".coin-button").on("click", function(){
      var coin = $(this).attr("data-coin");
      coinPick(coin);})


      $(".dice-button").on("click", function(){
        var dicepick = $(this).attr("data-dice");
        die = 0;
        diePick(die);
        $(".diceresult").append("<p>You picked " + dicepick + " dice came up <br><br> "+die+"<p>");
      })

      $(".rsp-button").on("click", function(){
        var myRsp = $(this).attr("data-rsp");
        comprsp = 'bunnies'
        temp2 = "bunnies"
        rspPick(comprsp);
        $(".rspresult").append("<p>You picked " + myRsp + " and the Computer chose "+temp2+"<p>");
        if (myRsp == temp2) {result = "DRAW"}
        else if (myRsp == "Rock" && temp2 == "Paper") {result = "LOST"; cash = cash - 30; }
        else if (myRsp == "Paper" && temp2 == "Scissors") {result = "LOST"; cash = cash - 30; }
        else if (myRsp == "Scissors" && temp2 == "Rock") {result = "LOST";cash = cash - 30;}
        else {result = "WON!";
        cash = cash + 90;}
        rC();
        $("header").append("<h2>CURRENT CASH = "+ cash +"<h2>");

      $(".rspresult").append("<p>"+result+"<p>");

    })
  }

  function rC(){
    $("h2").remove();
  }

  function coinPick(temp){
    $('p').remove();
    var compcoin = Math.ceil(Math.random()*2)
    if (compcoin == 1){
      compcoin = "heads"
      $(".coinresult").append("<p>You picked " + temp + " coin was " + compcoin + "<p>");
    }
    if (compcoin == 2){
      compcoin = "tails"
      $(".coinresult").append("<p>You picked " + temp + " coin was " + compcoin +"<p>");
    }
    if (temp == compcoin) {results = "WON!!"; cash = cash + 20}
    else  {results = "LOST"; cash = cash - 20;}
    rC();$("header").append("<h2>CURRENT CASH = "+ cash +"<h2>");

  $(".coinresult").append("<p>"+results+"<p>");


}

function diePick(diex){
  $('p').remove();

  die = Math.ceil(Math.random()*6)
  switch(die) {
    case 1: die = 1;
    break;
    case 2: die = 2;
    break;
    case 3: die = 3;
    break;
    case 4: die = 4;
    break;
    case 5: die = 5;
    break;
    case 6: die = 6;
    break;
    default: die = 666;
  }
  diex = die
  return diex;
}

function rspPick(comprsp){
  $('p').remove();

  var numpicks = Math.ceil(Math.random()*3)
  switch(numpicks) {
    case 1: temp2 = "Rock";
    break;
    case 2: temp2= "Scissors";
    break;
    case 3: temp2 = "Paper";
    break;
    default: temp2 = "Bunnies";
  }
  comprsp = temp2
  return comprsp;
}
