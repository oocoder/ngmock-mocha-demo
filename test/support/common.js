(function(){
    'use strict';
    var chai = require('chai');
    var should = chai.should();
    chai.use(require('sinon-chai'));
    chai.use(require('chai-as-promised'));
    require('../../src/virtualdom');

    // call this method to finish setting up simulating running mocha on browser.   
    global.setupTests = function(){
        require('angular/angular');
        global.angular = window.angular;
        window.mocha = true;
        window.beforeEach = beforeEach;
        window.afterEach = afterEach;
        require('angular-mocks/angular-mocks');
    };

})();