var app = angular.module('app', []);	
app.controller('Ctrl', function ($scope, $location, $anchorScroll){
    $scope.scroll = function (scrollLocation) {
        $location.hash(scrollLocation);
        $anchorScroll.yOffset = 50;
        $anchorScroll();
    }
});

