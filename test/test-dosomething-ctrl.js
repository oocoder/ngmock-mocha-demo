describe('DoSomethingCtrl', function(){
    var app = require('../src/main.js');

    if (angular && angular.mock){
        beforeEach(angular.mock.module(app.name));
        beforeEach(angular.mock.inject(function(_$controller_){ 
            global.ngCtrl = function(name, params){
                return _$controller_(name, params)
            }
        }));
    }

    
    it('should have valid methods methods', function(){
        var $scope = {};
        var ctrl = ngCtrl('DoSomemthingCtrl', {$scope: $scope});
        
    })
});