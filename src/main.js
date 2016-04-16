// MAIN.JS - Angular's app bootstrap module
module.exports = (function(angular){
    var somemodule = require('./ng-some-module');
    
    var app = angular.module('app', [somemodule.name])
    .config(['$compileProvider', function ($compileProvider) {
        $compileProvider.debugInfoEnabled(false);
    }])
    .factory('$runBlock', ['$someService', '$log', function($someService, $log){
        return {
            init : function(){ $log.log('$someService loaded...'); }
        };        
    }])
    .run(['$runBlock', function($runBlock){
        $runBlock.init();    
    }]);
    
    // manually bootstrap angular app
    angular.element(document).ready(function() {
        angular.bootstrap(document, [app.name]);
    });
    
    return app;        
    
})(require('./bootstrap-ui').angular);
