'use strict'

var abTestingApp = angular.module('abTestingApp', []);

abTestingApp.controller('FormAndDisplayController', function FormAndDisplayController($scope){
  $scope.task = {};
  $scope.master = {};
  $scope.tasks = {};

  $scope.onSubmit = function () {
    let taskName = $scope.task.name.toUpperCase().replace(/ /g,"_");
    let sample = $scope.task.sample;
    let platforms = [];
    let isWeb = $scope.task.web;
    let isMobile = $scope.task.mobile;

    if (isWeb){
      platforms.push("web");
    }

    if (isMobile){
      platforms.push("ios");
      platforms.push("android");
    }

    $scope.tasks[taskName] = {
      "sample": sample,
      "platforms": platforms
    }
    $scope.task = {};
  };

  $scope.edit = function(key){
    if (!$('#createAndEdit').hasClass("in")){
      $('#createAndEdit').collapse('toggle');
    }
    $scope.task.name = key;
    $scope.task.sample = $scope.tasks[key].sample;
    let isWeb = $scope.tasks[key].platforms.indexOf("web") >= 0;
    let isMobile = $scope.tasks[key].platforms.indexOf("ios") >= 0 ||
        $scope.tasks[key].platforms.indexOf("android") >= 0;

    if (isWeb){
      $scope.task.web = true;
    } else {
      $scope.task.web = false;
    }
    if (isMobile){
      $scope.task.mobile = true;
    } else {
      $scope.task.mobile = false;
    }
  }

});
