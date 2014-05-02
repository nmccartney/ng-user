'use strict';

describe('Service: Userserv', function () {

  // load the service's module
  beforeEach(module('ngUserApp'));

  // instantiate service
  var Userserv;
  beforeEach(inject(function (_Userserv_) {
    Userserv = _Userserv_;
  }));

  it('should do something', function () {
    expect(!!Userserv).toBe(true);
  });

});
