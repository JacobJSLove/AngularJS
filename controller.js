var app = angular
.module('app', ["ngRoute"])
.config(function ($routeProvider, $locationProvider){
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
      .when("/students/:id", {
      templateUrl:"templates/studentsDetails.html",
      controller:"studentsDetailsController"
    })
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('');
})
.controller('homeController', function($scope){
  $scope.message = "Home Page";
})

.controller("coursesController", function($scope){
  $scope.courses = ["HTML", "C+", "CSS"];
})

.controller("studentsController", function($scope, $http){
      var successCallback =  function (response){
            $scope.citys = response.data.citys;
            };

    var errorCallback = function (reason){
            $scope.error = reason.data;
            };
  $http({
              method: 'GET',
              url: 'http://localhost:3000/citys'
            }).then(successCallback, errorCallback);

})
.controller("studentsDetailsController", function($scope, $http, $routeParams){
var id = $routeParams.id-1;
$http({
              method: 'GET',
              url: 'http://localhost:3000/city/'+id,
              params:{id:$routeParams.id},
            }).then(function(response){
            $scope.city = response.data.citys;
            })
});

