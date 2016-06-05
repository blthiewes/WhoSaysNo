(function(){
    'use strict';
        
    angular.module('myapp').controller('homeController', ['$scope', function($scope) {
        $scope.greeting = 'Hola!';
        
        $scope.draftPicks = [
            {"pick":1, "owner":'Brandon'},
            {"pick":2, "owner":'Brutus'},
            {"pick":3, "owner":'Brice'},
            {"pick":4, "owner":'Brice'},
            {"pick":5, "owner":'Brandon'},
            {"pick":6, "owner":'Greg'},
            {"pick":7, "owner":'Fritz'},
            {"pick":8, "owner":'Brent'},
            {"pick":9, "owner":'Brandon'},
            {"pick":10, "owner":'Brice'},
            {"pick":11, "owner":'Ross'},
            {"pick":12, "owner":'Brandon'},
            {"pick":13, "owner":'Brandon'},
            {"pick":14, "owner":'Brent'},
            {"pick":15, "owner":'Brutus'},
            {"pick":16, "owner":'Brutus'},
            {"pick":17, "owner":'Ross'},
            {"pick":18, "owner":'Brent'},
            {"pick":19, "owner":'Derrick'},
            {"pick":20, "owner":'Brutus'},
            {"pick":21, "owner":'Fritz'},
            {"pick":22, "owner":'Brent'},
            {"pick":23, "owner":'Brutus'},
            {"pick":24, "owner":'Chris'},
            {"pick":25, "owner":'Matt'},
            {"pick":26, "owner":'Greg'},
            {"pick":27, "owner":'Brutus'},
            {"pick":28, "owner":'Brandon'},
            {"pick":29, "owner":'Matt'},
            {"pick":30, "owner":'Matt'},
            {"pick":31, "owner":'Derrick'},
            {"pick":32, "owner":'Brutus'},
            {"pick":33, "owner":'Fritz'},
            {"pick":34, "owner":'Kyle'},
            {"pick":35, "owner":'Kevin'},
            {"pick":36, "owner":'Derrick'}
        ];
    }]);
})();