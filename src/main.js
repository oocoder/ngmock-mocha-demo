module.exports = (function(angular){
    return angular
    .config()
    .factory('$runBlock', ['$someService', '$log', function($someService, $log){
        return {
            init : function(){ $log.log('$someService loaded...'); }
        }        
    }])
    .run(['$runBlock', function($runBlock){
        $runBlock.init();    
    }]);
    
    
})(window.angular);
