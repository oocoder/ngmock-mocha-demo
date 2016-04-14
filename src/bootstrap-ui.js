// BOOTSTRAP-UI.JS - 
module.exports = (function(){
    if(typeof window === 'undefined'){
        // not running in browser? 
        require('./virtual-dom');
        require('angular/angular');
        global.angular = window.angular;
    }      

    return {
        angular: window.angular
    };
})();