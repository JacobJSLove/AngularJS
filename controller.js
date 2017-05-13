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
      controllerAs: "studentsCtrl",
      /* Zapobieganie załadowaniu strony przed danymi z bazy */
      resolve: {
        studentslist : function ($http) {
           return $http({
              method: 'GET',
              url: 'http://localhost:3000/citys'
            }).then(function (response) {
              return response.data.citys;
        })
      }
    }
    })
      /* id jako opcjonalne :id? */
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

.controller("studentsController", function(studentslist, $route, $scope){
                  /* Alert wyjście z strony  */
      // $scope.$on("$locationChangeStart", function (event, next, current){
      //   if(!confirm ("Are you sure? You want to leave " + current)) {
      //     event.preventDefault();
      //   }
      // });

      var vm = this;
      vm.reload = function () {
        $route.reload();
      }
      vm.citys = studentslist;
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

