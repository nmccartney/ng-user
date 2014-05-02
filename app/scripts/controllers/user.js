'use strict';

angular.module('ngUserApp')
  .controller('UserCtrl', function ($scope,Userserv) {
    $scope.users = Userserv.users ;

    $scope.$on('users.update',function(){
      console.log($scope.users.length,Userserv.users.length)
      $scope.users = Userserv.users ;
      $scope.$apply();
    });

    $scope.addUser = function(u){
      Userserv.add(u);
      $scope.user = null;
    };

    $scope.deleteUser = function(u){
      Userserv.delete(u);
    };

    $scope.updateUser = function(u){
      Userserv.update(u);
    } ;
  });
