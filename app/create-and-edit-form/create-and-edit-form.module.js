let createAndEditForm = angular.module('createAndEditForm', []);

createAndEditForm.controller('createAndEditFormController', function($scope){
  $scope.task = {}
  $scope.master = {}
  $scope.tasks = {}

  $scope.onSubmit = function () {
    let taskName = $scope.task.name.toUpperCase().replace(/ /g,"_");
    let sample = $scope.task.sample;
    let platforms = []
    if ($scope.task.mobile){
      platforms.push("ios")
      platforms.push("android")
    }
    if ($scope.task.web){
      platforms.push("web")
    }

    $scope.tasks[taskName] = {
      "sample": sample,
      "platforms": platforms
    }
    $scope.task = {};
  };

  $scope.edit = function(key){
    $scope.task.name = key;
    $scope.task.sample = $scope.tasks[key].sample;
    if ($scope.tasks[key].platforms.indexOf("web") >= 0){
      $scope.task.web = true;
    } else {
      $scope.task.web = false;
    }
    if ($scope.tasks[key].platforms.indexOf("ios") >= 0 ||
        $scope.tasks[key].platforms.indexOf("android") >= 0 ){
      $scope.task.mobile = true;
    } else {
      $scope.task.mobile = false;
    }
  }


});
