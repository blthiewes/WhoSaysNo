(function () {
    'use strict';
    
    var myapp = angular.module('myapp', ["ui.router"]);
    
    myapp.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home', {
            url: "/home",
            views: {
                "viewA": {
                    templateUrl: "modules/home/home.html",
                    controller : "homeController"
                }
            }
        })
        .state('rules', {
            url: "/rules",
            views: {
                "viewA": {
                    templateUrl: "modules/rules/rules.html"
                }
            }
        })
        .state('history', {
            url: "/history",
            views: {
                "viewA": {
                    templateUrl: "modules/history/history.html",
                    controller : "historyController"
                }
            }
        });
        
    $urlRouterProvider.otherwise('home');
    });
})();