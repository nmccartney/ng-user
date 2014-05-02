'use strict';

describe('Controller: UserctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('ngUserApp'));

  var UserctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserctrlCtrl = $controller('UserctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
