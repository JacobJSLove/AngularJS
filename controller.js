var app = angular.module('app', []);	
app.controller('Ctrl', function ($scope, $http){
    var successCallback =  function (response){
            $scope.employees = response.data;
            };

    var errorCallback = function (reason){
            $scope.error = reason.data;
            };


        $http({
              method: 'GET',
              url: 'http://localhost:3000/contacts'
            }).then(successCallback, errorCallback);
        });

