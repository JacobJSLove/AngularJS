var app = angular
.module('app', ["ui.router"])
.config(function ($stateProvider ,$urlMatcherFactoryProvider, $urlRouterProvider, $locationProvider){
 // $routeProvider.caseInsensitiveMatch = true; /* Students work like students */
  $urlMatcherFactoryProvider.caseInsensitive(true);
  $urlRouterProvider.otherwise("/home");
  $stateProvider
    .state("home", {
      url: "/home",
      templateUrl:"templates/home.html",
    /*template:"<h1>Zamiast nowe pliku html</h1>", Nowa możliwość zmiast nowych plików html*/
      controller:"homeController",
      controllerAs: "homeCtrl"
    })
    .state("courses", {
      url: "/courses",
      templateUrl:"templates/courses.html",
      controller:"coursesController",
      controllerAs: "coursesCtrl"    
    })
      .state("students", {
      url: "/students",
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
      .state("studentsDetails", {
      url:"/students/:id",
      templateUrl:"templates/studentsDetails.html",
      controller:"studentsDetailsController",
      controllerAs: "studentsDetailsCtrl"
    })
  //     .otherwise({
  //     redirectTo:"/home"
  //   })  
  $locationProvider.html5Mode(true);
  // $locationProvider.hashPrefix('');
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

.controller("studentsController", function(studentslist, $state, $scope){
                  /* Alert wyjście z strony  */
      // $scope.$on("$locationChangeStart", function (event, next, current){
      //   if(!confirm ("Are you sure? You want to leave " + current)) {
      //     event.preventDefault();
      //   }
      // });

      var vm = this;
      vm.reload = function () {
        $state.reload();
      }
      vm.citys = studentslist;
      })
.controller("studentsDetailsController", function($http, $stateParams){
var id = $stateParams.id-1;
var vm = this;
$http({
              method: 'GET',
              url: 'http://localhost:3000/city/'+id,
              params:{id:$stateParams.id},
            }).then(function(response){
            vm.city = response.data.citys;
            })
});

