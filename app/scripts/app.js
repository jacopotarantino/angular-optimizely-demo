'use strict';

angular.module('angularOptimizelyDemoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ab.test.service'
])

.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/main',
      controller: 'MainCtrl'
    })
    .when('/sample', {
      templateUrl: 'partials/sample',
      controller: 'SampleCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
})

.factory('ab', ['abMfg', function(abMfg) {
  return abMfg();
}]);