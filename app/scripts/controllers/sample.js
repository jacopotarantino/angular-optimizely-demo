'use strict';

angular.module('angularOptimizelyDemoApp')
  .controller('SampleCtrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
  });
