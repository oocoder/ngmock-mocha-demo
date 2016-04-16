(function(){
    'use strict';
    var chai = require('chai');
    var should = chai.should();
    chai.use(require('sinon-chai'));
    chai.use(require('chai-as-promised'));
    require('../../src/virtualdom');
    
    
    var isSetupInit = false;
    global.setupTests = function(){
        if(isSetupInit) return;
        isSetupInit = true;
 
        require('angular/angular');
        global.angular = window.angular;
        window.mocha = true;
        window.beforeEach = beforeEach;
        window.afterEach = afterEach;
        require('angular-mocks/angular-mocks');
        global.inject = angular.mock.inject;
    };

})();