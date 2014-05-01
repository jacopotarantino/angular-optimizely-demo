'use strict';

angular.module('angularOptimizelyDemoApp')
  .controller('ExpectedtimerCtrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
  });
'use strict';

angular.module('angularOptimizelyDemoApp')
.controller('ExpectedtimerCtrl', ['$http', '$scope', '$timeout', function ($http, $scope, $timeout) {
  $http.get('/api/awesomeThings').success(function(awesomeThings) {
    var start = new Date(),
      end = null,
      manipulated = null;

    $scope.ajax = start - window.loadTime;

    $timeout(function() {
      $scope.Model = {};
      var dt = [];

      for (var i = 0; i < 6; i++) {
        var group = {
          Name: 'Group ' + i,
          Filters: []
        };
        for (var j = 0; j < 5; j++) {
          var filter = {
            Name: 'Filter ' + j,
            Values: []
          };
          for (var k = 0; k < 5; k++) {
            filter.Values.push(k);
          }
          group.Filters.push(filter);
        }
        dt.push(group);
      }

      $scope.Model.Groups = dt;
      $scope.$digest();
    });
    $timeout(function() {
      end = new Date();
      $scope.timer = end - start;
    });

    $timeout(function() {
      var theEnd = new Date();
      $scope.totalTime = theEnd - window.loadTime;
    });
  });
}]);
