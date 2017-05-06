var opencartConfiguratorApp = angular.module('opencartConfigurator', [ "ngRoute" ])
    .config(function ($routeProvider) {
        $routeProvider.when('/stepCat', {
            templateUrl: '/index.php?route=bymsx/configurator/view&path=category',
            controller: 'categoryController'
        });
        $routeProvider.when('/stepProducts/:category', {
            templateUrl: '/index.php?route=bymsx/configurator/view&path=products',
            controller: 'productsController'
        });
        $routeProvider.otherwise({redirectTo: '/stepCat'});
    });

opencartConfiguratorApp.controller('mainController', function ($scope, $location, $templateCache, $routeParams, selectionService, nativeOpenCartService) {
    function nextTab () {
        var nextId = selectionService.nextCategoryId();

        if (nextId >= 0) {
            $location.path('/stepProducts/' + nextId);
        } else if (nextId == -1) {
            window.location.href = '/index.php?route=checkout/cart';
        } else if (nextId == -2) {
            alert("Пожалуйста, выберите интересующие Вас категории товара с помощью флажков!");
        }
    }

    $scope.next = function () {
        var lastProd = selectionService.getLastSelectedProduct();
        if (lastProd) {
            nativeOpenCartService.addToCart(lastProd).then(function (isAdded) {
                if (isAdded) {
                    nextTab();
                } else {
                    alert("Ошибка добавления товара в корзину.");
                }
            });
        } else {
            nextTab();
        }
    };

    $scope.loading = false;

    $scope.$on("$routeChangeSuccess", function () {
        $scope.loading = false;
    });

    $scope.$on("$routeChangeStart", function () {
        $scope.loading = true;
    });
});
