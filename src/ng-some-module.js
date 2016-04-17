// NG-SOME-MODULE.JS - 
module.exports = (function(angular){
    var SomeApi = require('../src/someapi');
    
    return angular.module('ngSomeModule', [])
    .controller('DoSomethingCtrl', ['$scope', function($scope){
        return {
            getSomeData: () => {}
        }; 
    }])
    .factory('$someService', function(){
        return SomeApi.create();
    });
})(require('./bootstrap-ui').angular);