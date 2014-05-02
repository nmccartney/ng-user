'use strict';

angular.module('ngUserApp')
  .directive('mainNav', function () {
    return {
      templateUrl: '/views/main-nav.html' ,
      restrict: 'E'
    };
  });
