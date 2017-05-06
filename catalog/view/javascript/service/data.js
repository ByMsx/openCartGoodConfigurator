var categories;
opencartConfiguratorApp.factory('dataService', function ($http, $q) {
    return {
        getCategories: function () {
            var deferred = $q.defer();

            $http({ method: 'GET', url: '/index.php?route=bymsx/configurator/api&category' })
                .then (function success(response) {
                    categories = response.data;
                    deferred.resolve(response.data);
                }, function error(response) {
                    deferred.reject(response);
                }
            );

            return deferred.promise;
        },
        getProducts: function (category) {
            var deferred = $q.defer();
            $http({ method: 'GET', url: '/index.php?route=bymsx/configurator/api&products=' + category })
                .then(function (response) {
                    deferred.resolve(response.data);
                }, function (response) {
                    deferred.reject(response);
                });

            return deferred.promise;
        },
        getCategoryName: function (category) {
            var catId;
            for (var i = 0; i < categories.length; i++) {
                if (categories[i].category_id == category) {
                    catId = i;
                    break;
                }
            }
            return categories[catId].name;
        }
    };
});
