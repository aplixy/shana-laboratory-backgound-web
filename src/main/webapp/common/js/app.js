define([ "require", "angular", "angular-ui-router" ],
		function(require, angular) {
			var app = angular.module('app', [ 'ui.router' ]);
			app.config([
					'$stateProvider',
					'$urlRouterProvider',
					'$controllerProvider',
					'$compileProvider',
					'$filterProvider',
					'$provide',
					function($stateProvider, $urlRouterProvider,
							$controllerProvider, $compileProvider,
							$filterProvider, $provide) {
						app.register = {
							// 得到$controllerProvider的引用
							controller : $controllerProvider.register,
							// 同样的，这里也可以保存directive／filter／service的引用
							directive : $compileProvider.directive,
							filter : $filterProvider.register,
							service : $provide.service
						};
					} ]);
			app.controller('appCtrl', [ '$scope', '$state', '$rootScope',
					function($scope, $state, $rootScope) {
						$scope.load = function(pageName, params) {
							$state.go(pageName,params, { reload: true });
						};
					} ]);
			
			app.generateRouteState = function(controller, templateUrl, jsPath,params) {
				var routeState = {};
				if (controller && null != controller) {
					routeState.controller = controller;
				}
				if (templateUrl && null != templateUrl) {
					routeState.templateUrl = templateUrl;
				}
				
				if(params&&null!=params){
					
					routeState.params=params;
				}
				
				if (jsPath && null != jsPath) {
					routeState.resolve = {
						loadCtrl : [ "$q", function($q) {
							var deferred = $q.defer();
							// 异步加载controller
							require([ jsPath ], function() {
								deferred.resolve();
							});
							return deferred.promise;
						} ]
					};
				}
				return routeState;

			};
			require([ 'domReady!' ], function(document) {
				angular.bootstrap(document, [ "app" ]);
			});
			return app;
		});