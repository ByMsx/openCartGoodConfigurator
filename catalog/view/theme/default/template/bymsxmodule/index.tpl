<!DOCTYPE html>
<html lang="ru" ng-app="opencartConfigurator">
<head>
    <meta charset="UTF-8">
    <title>Конфигуратор</title>

    <script src="/catalog/view/javascript/angular.min.js"></script>
    <script src="/catalog/view/javascript/angular-route.js"></script>
    <script src="/catalog/view/javascript/index.js"></script>
    <script src="/catalog/view/javascript/service/nativeOpenCartService.js"></script>
    <script src="/catalog/view/javascript/service/data.js"></script>
    <script src="/catalog/view/javascript/service/selection.js"></script>
    <script src="/catalog/view/javascript/controller/category.js"></script>
    <script src="/catalog/view/javascript/controller/products.js"></script>
</head>
<body ng-controller="mainController">

<div ng-view></div>
<button ng-click="next()">Next >>></button>
</body>
</html>