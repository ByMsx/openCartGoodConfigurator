<div ng-controller="productsController">
<h1><?php echo $lng_select_products; ?> {{categoryName}}</h1>
<form>
	<div ng-repeat="(key,prod) in products">
		<input type="radio" name="option" ng-click="selectProduct(prod.product_id)">
		<span>{{prod.name}}</span>
	</div>
</form>
</div>