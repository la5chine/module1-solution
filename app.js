(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchController', function ($scope) {
  $scope.foods = "";
  $scope.num = 0;
  $scope.foodlist = foods.split(',');

  $scope.displayNumeric = function () {
    var totalNameValue = calculatNumericForString($scope.name);
    $scope.totalValue = totalNameValue;
  };


  function calculatNumericForString(string) {
    var totalStringValue = 0;
    for (var i = 0; i < string.length; i++) {
      totalStringValue += string.charCodeAt(i);
    }

    return totalStringValue;
  }

});


})();
