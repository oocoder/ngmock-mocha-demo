// NG-SOME-MODULE.JS - 
module.exports = (function(angular){
    return angular.module('ngSomeModule', [])
    .controller('DoSomethingCtrl', ['$scope', function($scope){
        return {
            getSomeData: () => {}
        }; 
    }])
    .factory('$someService', function(){
        return {
            run: () => 'initializing run world'
        };
    });
})(require('./bootstrap-ui').angular);