setupTests();

describe('Verify Services', function(){
    var app = require('../src/main');
    
    beforeEach(angular.mock.module(app.name));

    it('should have valid methods', inject(function($someService){
        $someService.should.respondTo('getData');
        $someService.should.respondTo('saveData');
        $someService.should.respondTo('refreshData');
    }));   
    
});