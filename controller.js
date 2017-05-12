var app = angular
.module('app', ["ngRoute"])
.config(function ($routeProvider, $locationProvider){
 $routeProvider.caseInsensitiveMatch = true; /* Students work like students */
  $routeProvider
    .when("/home", {
      templateUrl:"templates/home.html",
    /*template:"<h1>Zamiast nowe pliku html</h1>", Nowa możliwość zmiast nowych plików html*/
      controller:"homeController",
      controllerAs: "homeCtrl"
    })
    .when("/courses", {
      templateUrl:"templates/courses.html",
      controller:"coursesController",
      controllerAs: "coursesCtrl"    
    })
      .when("/students", {
      templateUrl:"templates/students.html",
      controller:"studentsController",
      controllerAs: "studentsCtrl"
    })
      .when("/students/:id", {
      templateUrl:"templates/studentsDetails.html",
      controller:"studentsDetailsController",
      controllerAs: "studentsDetailsCtrl"
    })
      .otherwise({
      redirectTo:"/home"
    })  
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('');
})
.controller('homeController', function(){
  this.message = "Home Page";
})
            .controller("countryController", function () {
                this.name = "India";
            })
            .controller("stateController", function () {
                this.name = "Maharashtra";
            })
            .controller("cityController", function () {
                this.name = "Mumbai";
            })

.controller("coursesController", function(){
  this.courses = ["HTML", "C+", "CSS"];
})

.controller("studentsController", function($http, $route){
      var vm = this;
      vm.reload = function () {
        $route.reload();
      }
      var successCallback =  function (response){
            vm.citys = response.data.citys;
            };

    var errorCallback = function (reason){
            vm.error = reason.data;
            };
  $http({
              method: 'GET',
              url: 'http://localhost:3000/citys'
            }).then(successCallback, errorCallback);

})
.controller("studentsDetailsController", function($http, $routeParams){
var id = $routeParams.id-1;
var vm = this;
$http({
              method: 'GET',
              url: 'http://localhost:3000/city/'+id,
              params:{id:$routeParams.id},
            }).then(function(response){
            vm.city = response.data.citys;
            })
});

