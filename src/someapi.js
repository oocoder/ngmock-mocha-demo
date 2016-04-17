// SOMEAPI.JS - Some API to support your app
module.exports = (function(){
    function Build(){}
    Build.prototype.create = function(){
        return {
            getData: function(){},
            saveData: function(){},
            refreshData: function(){}
        };
    };
    
    
    return new Build();
})();