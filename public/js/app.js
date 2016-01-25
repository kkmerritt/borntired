 // alert('hi')
// NOTE: app.js - angular for borntired.net

var app = angular.module("borntired", []);

app.run(function($rootScope) {
    $rootScope.bgcolor = 'whitesmoke'; 
});

app.controller("myCtrl", function($scope) {
    $scope.firstName = "Kevin";
    $scope.lastName = "Merritt";
});

app.directive("articleDirective", function() {
    return {
        restrict : "C", //restricted to classes.
        template : "<h1>About Me...</h1>"
    };
});
