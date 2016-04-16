describe('DoSomethingCtrl', function(){
    var app = require('../src/main.js');
    var $controller;
    
    beforeEach(angular.mock.module(app.name));
    beforeEach(angular.mock.inject(function(_$controller_){ 
        $controller = function(name, params){
            return _$controller_(name, params);
        };
    }));
    
    it('should have valid methods methods', function(){
        var $scope = {};
        var ctrl = $controller('DoSomethingCtrl', {$scope: $scope});
        ctrl.should.respondTo('getSomeData');
    });
});