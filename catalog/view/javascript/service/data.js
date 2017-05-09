var categories;

function search(obj, id) {
    if (obj.categories) {
        for (var key in obj.categories) {
            if (obj.categories[key].category_id == id) {
                return obj.categories[key];
            }

            var r = search(obj.categories[key], id);
            if (r) {
                return r;
            }
        }
    }

    return null;
}

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
            var cat;
            for (var i = 0; i < categories.length; i++) {
                if (categories[i].category_id == category) {
                    cat = categories[i];
                    break;
                }

                if ((cat = search(categories[i], category))) {
                    break;
                }
            }
            return cat.name;
        }
    };
});
