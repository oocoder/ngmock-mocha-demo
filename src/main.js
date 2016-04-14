// MAIN.JS - Angular's app bootstrap module
module.exports = (function(angular){
    var app = angular.module('demo-app', ['ngSomeModule'])
    .config(['$compileProvider', function ($compileProvider) {
        $compileProvider.debugInfoEnabled(false);
    }])
    .factory('$runBlock', ['$someService', '$log', function($someService, $log){
        return {
            init : function(){ $log.log('$someService loaded...'); }
        }        
    }])
    .run(['$runBlock', function($runBlock){
        $runBlock.init();    
    }]);
    
    angular.element(document).ready(function() {
        angular.bootstrap(document, [app.name]);
    });        
    
})(require('./bootstrap-ui').angular);
