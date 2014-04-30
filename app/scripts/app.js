'use strict';

angular.module('angularOptimizelyDemoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ab.test.service'
])

.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/main',
      controller: 'MainCtrl'
    })
    .when('/sample', {
      templateUrl: 'partials/sample',
      controller: 'SampleCtrl'
    })
    .when('/timer', {
      templateUrl: 'partials/timer',
      controller: 'TimerCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
}])

.run(['$rootScope', 'postLoad', function($rootScope, postLoad) {
  window.optimizely.push(['activate']);

  $rootScope.$on('$viewContentLoaded', function() {
    postLoad();
  });
}])

.factory('ab', ['abMfg', function(abMfg) {
  return abMfg();
}])

.factory('postLoad', ['$timeout', function($timeout) {
  return function() {
    console.log('Sending analytics to segment.io!');

    $timeout(function() {
      window.optimizely.push(['activate']);
      console.log('triggered experiments');
    });
  };
}]);