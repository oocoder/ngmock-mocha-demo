// BOOTSTRAP-UI.JS - 
module.exports = (function(){
    if(typeof window === 'undefined')
        require('./virtualdom');
        
    require('angular/angular');
    return {
        angular: window.angular
    };
})();