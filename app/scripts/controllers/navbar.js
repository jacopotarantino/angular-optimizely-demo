'use strict';

angular.module('angularOptimizelyDemoApp')
.controller('NavbarCtrl', function ($scope, $location) {
  $scope.menu = [{
    'title': 'Home',
    'link': '/'
  },
  {
    'title': 'Sample',
    'link': '/sample'
  },
  {
    'title': 'Timer',
    'link': '/timer'
  },
  {
    'title': 'CDNTimer',
    'link': '/cdntimer'
  },
  {
    'title': 'SaneTimer',
    'link': '/sanetimer'
  },
  {
    'title': 'Normal Timer',
    'link': '/expectedtimer'
  }];

  $scope.isActive = function(route) {
    return route === $location.path();
  };
});
