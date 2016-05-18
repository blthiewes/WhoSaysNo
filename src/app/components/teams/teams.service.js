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
        'id': 2,
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
      },
      {
        'id': 3,
        'title': 'BJM Express',
        'url': 'http://games.espn.go.com/ffl/clubhouse?leagueId=1262170&teamId=2',
        'description': '0-0',
        'logo': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJnx1lKjvq4dY2dQyocCnC8VkRPd_bMuzIgyPKdTsJUCF9X45l',
        'players':[
          {
            'position':'QB',
            'name':'Matt Ryan',
            'team':'Atl'
          }
        ]
      },
      {
        'id': 4,
        'title': 'The Power Moves',
        'url': 'http://games.espn.go.com/ffl/clubhouse?leagueId=1262170&teamId=2',
        'description': '0-0',
        'logo': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJnx1lKjvq4dY2dQyocCnC8VkRPd_bMuzIgyPKdTsJUCF9X45l',
        'players':[
          {
            'position':'QB',
            'name':'Russell Wilson',
            'team':'Sea'
          }
        ]
      },
      {
        'id': 5,
        'title': 'Mad Men',
        'url': 'http://games.espn.go.com/ffl/clubhouse?leagueId=1262170&teamId=2',
        'description': '0-0',
        'logo': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJnx1lKjvq4dY2dQyocCnC8VkRPd_bMuzIgyPKdTsJUCF9X45l',
        'players':[
          {
            'position':'QB',
            'name':'Carson Palmer',
            'team':'Ari'
          }
        ]
      },
      {
        'id': 6,
        'title': 'Dynastys Child',
        'url': 'http://games.espn.go.com/ffl/clubhouse?leagueId=1262170&teamId=2',
        'description': '0-0',
        'logo': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJnx1lKjvq4dY2dQyocCnC8VkRPd_bMuzIgyPKdTsJUCF9X45l',
        'players':[
          {
            'position':'QB',
            'name':'Andrew Luck',
            'team':'Ind'
          }
        ]
      },
      {
        'id': 7,
        'title': 'Bemis Jets',
        'url': 'http://games.espn.go.com/ffl/clubhouse?leagueId=1262170&teamId=2',
        'description': '0-0',
        'logo': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJnx1lKjvq4dY2dQyocCnC8VkRPd_bMuzIgyPKdTsJUCF9X45l',
        'players':[
          {
            'position':'QB',
            'name':'Derek Carr',
            'team':'Oak'
          },
          {
            'position':'RB',
            'name':'Devonta Freeman',
            'team':'Atl'
          },
          {
            'position':'RB',
            'name':'Isaiah Crowell',
            'team':'Cle'
          },
          {
            'position':'WR',
            'name':'Michael Crabtree',
            'team':'Oak'
          },
          {
            'position':'WR',
            'name':'Allen Hurns',
            'team':'Jax'
          },
          {
            'position':'TE',
            'name':'Clive Walford',
            'team':'Oak'
          },
          {
            'position':'RB',
            'name':'Alfred Blue',
            'team':'Hou'
          },
          {
            'position':'D/ST',
            'name':'Texans',
            'team':'Hou'
          },
          {
            'position':'K',
            'name':'Mason Crosby',
            'team':'GB'
          }
        ]
      },
      {
        'id': 8,
        'title': 'Morning Woodhead',
        'url': 'http://games.espn.go.com/ffl/clubhouse?leagueId=1262170&teamId=2',
        'description': '0-0',
        'logo': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJnx1lKjvq4dY2dQyocCnC8VkRPd_bMuzIgyPKdTsJUCF9X45l',
        'players':[
          {
            'position':'QB',
            'name':'Ben Roethlisberger',
            'team':'Pit'
          }
        ]
      },
      {
        'id': 9,
        'title': 'Los Pollos Hermanos',
        'url': 'http://games.espn.go.com/ffl/clubhouse?leagueId=1262170&teamId=2',
        'description': '0-0',
        'logo': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJnx1lKjvq4dY2dQyocCnC8VkRPd_bMuzIgyPKdTsJUCF9X45l',
        'players':[
          {
            'position':'QB',
            'name':'Tom Brady',
            'team':'NE'
          }
        ]
      },
      {
        'id': 10,
        'title': 'Team Fritz',
        'url': 'http://games.espn.go.com/ffl/clubhouse?leagueId=1262170&teamId=2',
        'description': '0-0',
        'logo': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJnx1lKjvq4dY2dQyocCnC8VkRPd_bMuzIgyPKdTsJUCF9X45l',
        'players':[
          {
            'position':'QB',
            'name':'Blake Bortles',
            'team':'Jax'
          }
        ]
      },
      {
        'id': 11,
        'title': 'Chris Mullen',
        'url': 'http://games.espn.go.com/ffl/clubhouse?leagueId=1262170&teamId=2',
        'description': '0-0',
        'logo': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJnx1lKjvq4dY2dQyocCnC8VkRPd_bMuzIgyPKdTsJUCF9X45l',
        'players':[
          {
            'position':'QB',
            'name':'Philip Rivers',
            'team':'SD'
          }
        ]
      },
      {
        'id': 12,
        'title': 'Lyle Lanley',
        'url': 'http://games.espn.go.com/ffl/clubhouse?leagueId=1262170&teamId=2',
        'description': '0-0',
        'logo': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJnx1lKjvq4dY2dQyocCnC8VkRPd_bMuzIgyPKdTsJUCF9X45l',
        'players':[
          {
            'position':'QB',
            'name':'Drew Brees',
            'team':'NO'
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
