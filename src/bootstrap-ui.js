module.exports = (function(){
    if(typeof window === 'undefined')
        require('virtual-dom');
    
    require('angular/angular');
        
    return window.angular;
})();