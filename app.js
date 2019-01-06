(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.list = "ff";
  $scope.stateOfBeing = "thinking";

  $scope.sayMessage = function () {
    return "I am not happy!";
  };

  $scope.makehimhappy = function () {
    $scope.stateOfBeing = "happy";
  };
}

})();
