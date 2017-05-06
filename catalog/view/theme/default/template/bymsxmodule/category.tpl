<div ng-controller="categoryController">
	<h1>Выберите категории товаров:</h1>
	<div ng-repeat="cat in categories">
		<input type="checkbox" ng-model="cat.selected" ng-click="selectCategory(cat.category_id, cat.selected)">
		<span>{{cat.name}}</span>
	</div>
</div>