(function(){
    'use strict';
    var chai = require('chai');
    chai.use(require('sinon-chai'));
    chai.use(require('chai-as-promised'));
    require('../../src/virtual-dom');

    // call this method to finish setting up simulating running mocha on browser.   
    global.setupTests = function(){
        window.mocha = true
        window.beforeEach = beforeEach
        window.setup = setup
        window.afterEach = afterEach
        window.teardown = teardown
    }

})();