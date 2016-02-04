// NOTE: core.js - angular frontend for borntired.net
(function(){
var app = angular.module("borntired", [])

app.controller("StoreController", function() {
  this.items = woodworksArray;
});

var woodworksArray = [
  {
    name: 'corner shelves',
    price: 200,
    imgurl: 'http://i.imgur.com/XnvoUXY.jpg',
    description: 'corner shelving unit',
    available: false,
    reviews: [
      {
        stars: 5,
        body: "i like this stuff",
        author: "kk@1.com",
      },
      {
        stars: 1,
        body: "i dislike this stuff",
        author: "jj@1.com",
      },

    ],
  },
  {
    name: 'pallet lamp',
    price: 125,
    imgurl: 'http://i.imgur.com/NsXQvw3.jpg',
    description: 'a ceiling lamp, built with pallet wood ',
    available: true,
    reviews: [
      {
        stars: 5,
        body: "i like this stuff",
        author: "kk@1.com",
      },
      {
        stars: 1,
        body: "i dislike this stuff",
        author: "jj@1.com",
      },

    ],
  },
  {
  name: 'jewelry holder',
  price: 50,
  imgurl: 'http://i.imgur.com/HXEIVjW.jpg',
  description: 'jewelry holder, refurbished frame w/ burlap',
  available: true,
  reviews: [
    {
      stars: 5,
      body: "i like this stuff",
      author: "kk@1.com",
    },
    {
      stars: 1,
      body: "i dislike this stuff",
      author: "jj@1.com",
    },

  ],
}
]; //end of woodworksArray

app.controller("PanelController", function(){
  this.tab = 1;

  this.selectTab = function(setTab){
    this.tab = setTab;};
  this.isSelected = function(checkTab){
  return this.tab === checkTab;};
});

app.controller("ReviewController", function(){
  this.review = {};
  this.addReview = function(item){
    item.reviews.push(this.review);
    this.review = {};
  };
})

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
