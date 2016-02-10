// Javascript File
// Kevin Merritt
// kkmerritt@gmail.com

//pick the random start card slot

var cardPick = Math.random();
if (cardPick < .333) { cardPick = 1;}
else if (cardPick > .666){ cardPick = 3;}
else {cardPick = 2;}

console.log("Using the console? Clever girl. It's card number " + cardPick);

if (cardPick == 1) {var startCard = $('.cardOne'); }
if (cardPick == 2) {var startCard = $('.cardTwo');}
if (cardPick == 3) {var startCard = $('.cardThree');}

//start click
$('.start').on('click', function () {
  startCard.animate({
    opacity: ".01"
  }, 2000)

  startCard.animate({
    opacity: "1"
  }, 4000);

  setTimeout(function(){$('.queen').remove();
}, 6000);

cardOne = $('.cardOne');
cardTwo = $('.cardTwo');
cardThree = $('.cardThree');


setTimeout(function(){onetwoShuffle(cardOne, cardTwo)
}, 6000)
setTimeout(function(){onethreeShuffle(cardOne, cardThree)
}, 10000)
setTimeout(function(){twothreeShuffle(cardTwo, cardThree)
}, 14000)

$('.cardOne').on('click', function () {
  if (cardPick == 1) {alert('right!')
}})
$('.cardTwo').on('click', function () {
    if (cardPick == 2) {alert('right!')
}})
$('.cardThree').on('click', function () {
    if (cardPick == 3) {alert('right')
}})

})

    //3x SHUFFLES Functions HERE
    function onetwoShuffle(x , y){
      $(x).animate({
        left: '128px'
      }, 2000)
      $(y).animate({
        top: '180px',
        right: '128px'
      }, 2000)
      $(y).animate({
        top: '-1px'
      }, 2000)
      if (cardPick == 1) {cardPick = 2};
      if (cardPick === 2) {cardPick = 1};
      setTimeout(function(){
        $(x).removeAttr('style');
        $(y).removeAttr('style');
      }, 3850);

    }

    function twothreeShuffle(x , y){
      $(y).animate({
        right: '128px'
      }, 2000)
      $(x).animate({
        top: '180px',
        left: '128px'
      }, 2000)
      $(x).animate({
        top: '0px'
      }, 2000)
      if (cardPick === 2) {cardPick = 3};
      if (cardPick === 3) {cardPick = 2};
      setTimeout(function(){
        $(x).removeAttr('style');
        $(y).removeAttr('style');
      }, 4000);

    }

    function onethreeShuffle(x , y){
      $(x).animate({
        left: '256px'
      }, 2000)
      $(y).animate({
        top: '180px',
        right: '255px'
      }, 2000)
      $(y).animate({
        top: '0px'
      }, 2000)
      if (cardPick === 1) {cardPick = 3};
      if (cardPick === 3) {cardPick = 1};
      setTimeout(function(){
        $(x).removeAttr('style');
        $(y).removeAttr('style');
      }, 4000);
    }
