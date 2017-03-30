let testItem = angular.module('testItem', []);

testItem.controller('TestItemController', function($scope){
  $scope.task = {}
  $scope.master = {}

  $scope.onSubmit = function () {
    $scope.master = $scope.task;
  };
});
