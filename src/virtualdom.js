// VIRTUAL-DOM.JS - configure jsdom.js to be use with angular
module.exports = (function(){
    var jsdom = require('jsdom').jsdom;
    global.document = jsdom('<html><head><script></script></head><body></body></html>');
    global.window = global.document.defaultView;
    global.navigator = window.navigator = {};
    global.Node = window.Node;
    
    return jsdom;
})();