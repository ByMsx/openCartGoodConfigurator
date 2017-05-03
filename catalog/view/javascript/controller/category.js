opencartConfiguratorApp.controller("categoryController", function ($scope, $location, $routeParams, dataService) {
	$scope.$on('$routeChangeSuccess', function () {
		dataService.getCategories().then(function (categories) {
	        $scope.categories = categories;
	    });
	});
});
