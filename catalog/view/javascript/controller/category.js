opencartConfiguratorApp.controller("categoryController", function ($scope, $location, $routeParams, dataService, selectionService) {
	$scope.$on('$routeChangeSuccess', function () {
		dataService.getCategories().then(function (categories) {
	        $scope.categories = categories;
	    });
	});

	$scope.selectCategory = function (id, sel) {
		selectionService.selectCategory(id, sel);
	};
});
