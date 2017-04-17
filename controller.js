var app = angular.module('app', []);	
app.controller('Ctrl', function ($scope, $http){
        $http({
          method: 'GET',
          url: 'http://localhost:3000/contacts'
                }).then( function (response){
            $scope.employees = response.data;
            });
});

