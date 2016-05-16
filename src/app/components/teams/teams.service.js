(function() {
  'use strict';

  angular
    .module('WhoSaysNo')
    .service('TeamsService', teamsService);

  /** @ngInject */
  function teamsService() {
    var teams = [
      {
        'id': 1,
        'title': 'Rhinestone Cowboys',
        'url': 'http://games.espn.go.com/ffl/clubhouse?leagueId=1262170&teamId=1',
        'description': '0-0',
        'logo': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJnx1lKjvq4dY2dQyocCnC8VkRPd_bMuzIgyPKdTsJUCF9X45l',
        'players':[
          {
            'position':'QB',
            'name':'Jameis Winston',
            'team':'TB'
          }
        ]
      },
      {
        'id': 1,
        'title': 'Wild Marlins',
        'url': 'http://games.espn.go.com/ffl/clubhouse?leagueId=1262170&teamId=2',
        'description': '0-0',
        'logo': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJnx1lKjvq4dY2dQyocCnC8VkRPd_bMuzIgyPKdTsJUCF9X45l',
        'players':[
          {
            'position':'QB',
            'name':'Cam Newton',
            'team':'CAR'
          }
        ]
      }
    ];

    this.getTeams = getTeams;

    function getTeams() {
      return teams;
    }
  }

})();
