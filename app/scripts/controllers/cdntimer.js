'use strict';

angular.module('angularOptimizelyDemoApp')
.controller('CdntimerCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
  var start = new Date(),
    end = null,
    manipulated = null;

  $timeout(function() {
    $scope.Model = {};
    var dt = [];

    for (var i = 0; i < 6; i++) {
      var group = {
        Name: 'Group ' + i,
        Filters: []
      };
      for (var j = 0; j < 30; j++) {
        var filter = {
          Name: 'Filter ' + j,
          Values: []
        };
        for (var k = 0; k < 15; k++) {
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
    //each group
    for (var i = 0; i < $scope.Model.Groups.length; i++) {
      //each filter in the group
      for (var j = 0; j < $scope.Model.Groups[i].Filters.length; j++) {
        $scope.Model.Groups[i].Filters[j].Name += 'Number ';
      }
    }
  });
  $timeout(function() {
    manipulated = new Date();
    $scope.updated = manipulated - end;
  });


  $timeout(function() {
    $scope.Model = {};
  });
  $timeout(function() {
    var boom = new Date();
    $scope.destroyed = boom - manipulated;
  });

  $timeout(function() {
    var theEnd = new Date();
    $scope.totalTime = theEnd - window.loadTime;
  });
}]);
