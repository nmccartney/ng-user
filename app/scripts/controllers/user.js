'use strict';

angular.module('ngUserApp')
  .controller('UserCtrl', function ($scope,Userserv) {
    $scope.users = Userserv.users ;

    $scope.$on('users.update',function(){
      console.log($scope.users.length,Userserv.users.length);
      $scope.users = Userserv.users ;
      $scope.$apply();
    });

    $scope.addUser = function(isValid, u){
      $scope.submitted = true;
      console.log(isValid);
      if(isValid){
        console.log($scope.first);
        
        Userserv.add({first: $scope.first,last:$scope.last});
        $scope.first = null;
        $scope.last = null;

      }else{
        
      }
      
    };

    $scope.deleteUser = function(u){
      Userserv.delete(u);
    };

    $scope.updateUser = function(u){
      Userserv.update(u);
    } ;
  });
