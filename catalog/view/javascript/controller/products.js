opencartConfiguratorApp.controller("productsController", function ($scope, $routeParams, dataService) {
	$scope.categoryName = dataService.getCategoryName($routeParams['category']);
	
    $scope.$on('$routeChangeSuccess', function () {
        dataService.getProducts($routeParams['category']).then(function (products) {
            $scope.products = products;
        });
    });
});
