setupTests();

describe('AngularRunBlock', function(){
    var app = require('../src/main');
    var sinon = require('sinon');
    
    beforeEach(angular.mock.module(app.name));
    
    it('should bootstrap run blocks', function(){
        var initRunBlock = sinon.spy();
        angular.mock.module({
            '$runBlock' : {
                init : initRunBlock
            }
        });

        // execute run blocks 
        angular.mock.inject();
        initRunBlock.called.should.be.true;
    });
    
});

