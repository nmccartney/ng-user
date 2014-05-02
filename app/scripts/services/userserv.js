'use strict';

angular.module('ngUserApp')
  .service('Userserv', function Userserv($rootScope) {
    var service = {
      users:[],
      add:function(u){
        u.id = service.users.length+1;
        service.users.push(u);
        return u.id;
      },
      delete:function(u){
        var du = service.users.indexOf(u) ;
        console.log(u,du)
        service.users.splice(du,1);
        $rootScope.$broadcast( 'users.update');
        return service.users;
      },
      update:function(u){
        var du = service.users.indexOf(u) ;
        service.users[du] = u;
        $rootScope.$broadcast( 'users.update');
      }
    };
    return service;
  });
