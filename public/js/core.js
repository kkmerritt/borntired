// NOTE: core.js - angular frontend for borntired.net
(function(){
var app = angular.module("borntired", [])

app.controller("StoreController", function() {
  this.items = woodworksArray;
});

var woodworksArray = [
  {
    name: 'magnetlamp',
    price: 300,
    imgurl: 'http://i.imgur.com/XnvoUXY.jpg',
    description: 'a lamp, magneticly held in place',
    available: false,
  },
  {
    name: 'pallet lamp',
    price: 300,
    imgurl: 'http://i.imgur.com/XnvoUXY.jpg',
    description: 'a ceiling lamp, built with pallet wood ',
    available: true,
  }
];

app.controller("PanelController", function(){

});

})(); //closure wrap

// NOTE: pointless test methods and directives.
// app.run(function($rootScope) {
//     $rootScope.bgcolor = 'whitesmoke';
// });
//

// directive example. essentially creating a controller.
// app.directive("articleDirective", function() {
//     return {
//         restrict : "C", //restricted to classes.
//         template : "<h1>About Me...</h1>"
//     };
// });
