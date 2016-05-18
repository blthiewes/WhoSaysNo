(function() {
  'use strict';

  angular
    .module('WhoSaysNo')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('rules', {
        url: '/rules',
        templateUrl: 'app/rules/rules.html',
        controller: 'RulesController',
        controllerAs: 'rules'
      })
      .state('history', {
        url: '/history',
        templateUrl: 'app/history/history.html',
        controller: 'HistoryController',
        controllerAs: 'history'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
