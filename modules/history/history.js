(function(){
    'use strict';
        
    angular.module('myapp').controller('historyController', ['$scope', function($scope) {
        $scope.greeting = 'Hola!';
        
        $scope.championships = [
            {"year":2013, "owner":'Matt Neu'},
            {"year":2014, "owner":'Matt Neu'},
            {"year":2015, "owner":'Kyle Beck'},
            {"year":2016, "owner":'Kyle Beck'},
            {"year":2017, "owner":'Kyle Beck'}
        ];
    }]);
})();
