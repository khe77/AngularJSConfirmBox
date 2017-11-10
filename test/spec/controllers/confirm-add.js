'use strict';

describe('Controller: ConfirmAddCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJsexamApp'));

  var ConfirmAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConfirmAddCtrl = $controller('ConfirmAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ConfirmAddCtrl.awesomeThings.length).toBe(3);
  });
});
