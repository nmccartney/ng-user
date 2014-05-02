'use strict';

angular.module('ngUserApp')
  .directive('userEdit', function () {
    return {
      template: '<a ng-href="#" >Edit</a>',
      restrict: 'E'
    };
  });
