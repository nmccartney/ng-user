'use strict';

angular.module('ngUserApp')
  .directive('userDelete', function () {
    return {
      template: '<a >Delete</a>',
      restrict: 'E',
      link:function(s,e){
        e.on('click tap',function(){
          s.deleteUser(s.user);
        });
      }
    };
  });
