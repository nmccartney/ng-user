'use strict';

describe('Directive: mainNav', function () {

  // load the directive's module
  beforeEach(module('ngUserApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<main-nav></main-nav>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the mainNav directive');
  }));
});
