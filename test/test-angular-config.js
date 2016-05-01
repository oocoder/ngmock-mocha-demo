setupTests();

describe('Verify Angular\'s config', function(){
    var app = require('../src/main');
    var sinon = require('sinon');
    
    it('should start with \'debug info\' disabled', function(){ 
        var $compileProvider;
        angular.mock.module(_$compileProvider_ => {
            $compileProvider = _$compileProvider_;
            $compileProvider.debugInfoEnabled = sinon.spy();
        });
        angular.mock.module(app.name);

        inject();
        $compileProvider.debugInfoEnabled.should.have.been.calledWith(false);
    });
    
    
});