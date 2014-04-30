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
    }];

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
