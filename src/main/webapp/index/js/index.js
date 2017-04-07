//'use strict';
define(["require", "angular", "angular-ui-router","app"], function(require, angular,uiRouter,app) {   	
    app.config(['$stateProvider','$urlRouterProvider','$controllerProvider','$compileProvider','$filterProvider','$provide',function($stateProvider, $urlRouterProvider,$controllerProvider,$compileProvider,$filterProvider,$provide){
    	
    	//$urlRouterProvider.otherwise('home');
        $stateProvider
        .state('laboratoryindexdraft',{
            controller: 'laboratoryIndexDraftCreateOrEditCtrl',
            templateUrl : '/laboratoryindexdraft/createOrEdit.html',
             resolve: {
                loadCtrl: ["$q", function($q) { 
                   var deferred = $q.defer();
                // 异步加载controller／directive/filter/service 
                 require(['/laboratoryindexdraft/js/createOrEdit.js'] , function() { 
                	 deferred.resolve(); 
                 });
                
                return deferred.promise;
               }]
           }
        });
    }]);
    return app;
});