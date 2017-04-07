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
						$scope.load = function(pageName, params, parentDivId) {
							$state.go(pageName, params);
						};
						// $scope.load("/laboratoryindexdraft/list");

					} ]);
			require([ 'domReady!' ], function(document) {
				angular.bootstrap(document, [ "app" ]);
			});
			return app;
		});