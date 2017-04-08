var app = angular.module('app', []);			 
app.controller('1Ctrl', function ($scope){
		var technologies = [
		{name:"HTML", like:0, dislike:0},
		{name:"CSS", like:0, dislike:0},
		{name:"JQ", like:0, dislike:0},
		{name:"SQL", like:0, dislike:0},
		];
		$scope.technologies = technologies;

$scope.addlike = function(technology) {
	technology.like++;
};
$scope.adddislike = function(technology) {
	technology.dislike++;
};
});		 
