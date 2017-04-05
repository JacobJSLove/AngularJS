// Przypisywanie RootScope do Scope
var app = angular.module('app', []);
app.run(function ($rootScope) {
	$rootScope.dateOrginal = new Date();
});
app.controller('dateCtrl', function($rootScope, $scope){
	$scope.orginal = function () {
		return $rootScope.dateOrginal;
	}	
});

app.controller('NewWords', function($scope){
	$scope.wiadomosc = "Przypisuje wiadomosc do widoku";
	$scope.funkcjaA = function () {
		return wiadomosc + "Nowe słowo";
	}
});

