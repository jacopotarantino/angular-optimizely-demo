'use strict';

angular.module('angularOptimizelyDemoApp')
.controller('SampleCtrl', ['ab', '$scope', function (ab, $scope) {
  $scope.class = ab.test([1,2,3,4,5,6,7], 1);
}]);
