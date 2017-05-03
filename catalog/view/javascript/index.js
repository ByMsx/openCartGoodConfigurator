var opencartConfiguratorApp = angular.module('opencartConfigurator', [ "ngRoute" ])
    .config(function ($routeProvider) {
        $routeProvider.when('/stepCat', {
            templateUrl: '/catalog/view/views/category.html',
            controller: 'categoryController'
        });
        $routeProvider.when('/stepProducts/:category', {
            templateUrl: '/catalog/view/views/products.html',
            controller: 'productsController'
        });
        $routeProvider.otherwise({redirectTo: '/stepCat'});
    });

opencartConfiguratorApp.controller('mainController', function ($scope, $location, $templateCache, $routeParams, selectionService) {
    $scope.next = function () {
        var nextId = selectionService.nextCategoryId();
        if (nextId >= 0) {
            $location.path('/stepProducts/' + nextId);
        } else if (nextId == -1) {
            console.dir(selectionService.getSelectedProducts());
        } else if (nextId == -2) {
            // не выбрано ни одной категории
        }
    };
});
