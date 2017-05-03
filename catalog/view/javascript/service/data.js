opencartConfiguratorApp.factory('dataService', function ($http, $q) {
    return {
        categories: null,
        getCategories: function () {
            var deferred = $q.defer();

            $http({ method: 'GET', url: '/index.php?route=bymsxmodule/api&category&format=json' })
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
            $http({ method: 'GET', url: '/index.php?route=bymsxmodule/api&format=json&products=' + category })
                .then(function (response) {
                    deferred.resolve(response.data);
                }, function (response) {
                    deferred.reject(response);
                });

            return deferred.promise;
        },
        getCategoryName: function (category) {
            return categories[category].name;
        }
    };
});
