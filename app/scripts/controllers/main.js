'use strict';

angular.module('angularOptimizelyDemoApp')
.controller('MainCtrl', ['$scope', '$http', 'postLoad', function ($scope, $http, postLoad) {
  $http.get('/api/awesomeThings').success(function(awesomeThings) {
    $scope.awesomeThings = awesomeThings;

    // only trigger after database objects have loaded.
    postLoad();
  });
}]);
