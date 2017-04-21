var app = angular
.module('app', ["ngRoute"])
.config(function ($routeProvider, $locationProvider){
$locationProvider.hashPrefix('');

$routeProvider
  .when("/home", {
    templateUrl:"templates/home.html",
    controller:"homeController"
  })
  .when("/courses", {
    templateUrl:"templates/courses.html",
    controller:"coursesController"
  })
    .when("/students", {
    templateUrl:"templates/students.html",
    controller:"studentsController"
  })
$locationProvider.html5Mode(true);
})
.controller('homeController', function($scope){
  $scope.message = "Home Page";
})

.controller("coursesController", function($scope){
  $scope.courses = ["HTML", "C+", "CSS"];
})

.controller("studentsController", function($scope, $http){
      var successCallback =  function (response){
            $scope.students = response.data;
            };

    var errorCallback = function (reason){
            $scope.error = reason.data;
            };
  $http({
              method: 'GET',
              url: 'students.json'
            }).then(successCallback, errorCallback);

});

