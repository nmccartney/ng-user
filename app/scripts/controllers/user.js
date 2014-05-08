'use strict';

angular.module('ngUserApp')
  .controller('UserCtrl', function ($scope,$location,Userserv) {
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

        Userserv.add({first: $scope.user.first,last:$scope.user.last});
        $scope.user.first = null;
        $scope.user.last = null;
        $location.path( "/users" );
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
