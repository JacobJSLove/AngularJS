var app = angular.module('app', []);	
app.controller('Ctrl', function ($scope, stringService){
    $scope.tranform = function (input) {
        $scope.output = stringService.processString(input);
    }
});

