// Method chaining
var app = angular.module('app', [])
				 .controller('myCtrl', function ($scope){
					$scope.oferty = [
					{ nazwa: 'Obiekt 1', cena: 150 },
					{ nazwa: 'Obiekt 2', cena: 100 },
					{ nazwa: 'Obiekt 3', cena: 250 },
					];
});
				 