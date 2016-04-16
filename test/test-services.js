setupTests();

describe('Verify Services', function(){
    var app = require('../src/main');
    var $controller;
    
    beforeEach(angular.mock.module(app.name));
    beforeEach(inject(function(_$controller_){ 
        $controller = function(name, params){
            return _$controller_(name, params);
        };
    }));

    it('should have valid methods', inject(function($someService){
        $someService.should.respondTo('run');    
    }));   
});