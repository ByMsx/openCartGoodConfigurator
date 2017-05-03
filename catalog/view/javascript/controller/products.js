opencartConfiguratorApp.controller("productsController", function ($scope, $routeParams, selectionService, dataService) {
	$scope.categoryName = dataService.getCategoryName($routeParams['category']);

    $scope.$on('$routeChangeSuccess', function () {
        dataService.getProducts($routeParams['category']).then(function (products) {
            $scope.products = products;
        });
    });

    $scope.selectProduct = function (productId) {
    	selectionService.selectProduct($routeParams['category'], productId);
    }
});
