opencartConfiguratorApp.factory('nativeOpenCartService', function ($http, $q) {
    return {
        addToCart: function (productId) {
            var deffered = $q.defer();

            $http.post({
                url: '/index.php?route=checkout/cart/add',
                method: "POST",
                withCredentials: true,
                data: 'product_id=' + productId + '&quantity=1'
            }).then(function (response) {
                if (response.status == 200) {
                    deffered.resolve(true);
                } else {
                    deffered.resolve(false);
                }
            });

            return deffered;
        }
    };
});