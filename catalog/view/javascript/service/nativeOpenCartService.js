opencartConfiguratorApp.factory('nativeOpenCartService', function ($http, $q) {
    return {
        addToCart: function (productId) {
            var deffered = $q.defer();

            $http({
                url: "/index.php?route=checkout/cart/add",
                method: "POST",
                withCredentials: true,
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded'
                },
                data: "quantity=1&product_id=" + productId
            }).then(function (response) {
                if (response.status == 200) {
                    deffered.resolve(true);
                } else {
                    deffered.resolve(false);
                }
            }, function () {
                deffered.resolve(false);
            });

            return deffered.promise;
        }
    };
});