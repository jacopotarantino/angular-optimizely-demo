'use strict';

angular.module('angularOptimizelyDemoApp')
.controller('MainCtrl', ['$scope', '$http', '$timeout', function ($scope, $http, $timeout) {
  $http.get('/api/awesomeThings').success(function(awesomeThings) {
    $scope.awesomeThings = awesomeThings;

    // only trigger after database objects have loaded.
    $timeout(function() {
      window.optimizely.push(['activate', 870891797]);
      console.log('triggered experiment id: 870891797');
    });
  });
}]);
