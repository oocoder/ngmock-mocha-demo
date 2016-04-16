// NG-SOME-MODULE.JS - 
module.exports = (function(angular){
    return angular.module('ngSomeModule', [])
    .controller('DoSomethingCtrl', ['$scope', function($scope){
        console.log('controller yeah!!');
        
        return {
            getSomeData: () => {}
        }; 
    }])
    .factory('$someService', function(){
        return {
            getSomeData: () => 'hello world'
        };
    });
})(require('./bootstrap-ui').angular);