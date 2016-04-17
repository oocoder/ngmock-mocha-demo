setupTests();

describe('Verify Angular\'s bootstrap', function(){
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
        inject();
        initRunBlock.should.have.been.calledOnce;
    });
    
    it('should refresh data from someAPI', function(){
        var refreshData = sinon.spy();
        angular.mock.module({
            '$someService': {
                refreshData: refreshData
            }
        });
        
        inject(function($runBlock){
            refreshData.should.have.been.calledOnce;
        });
        
    });
    
});

