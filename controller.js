// Method chaining
var app = angular.module('app', [])
				 .controller('myCtrl', function ($scope){
var human = {fName: "Mark",lName: "Testings"};
$scope.human = human;
});
