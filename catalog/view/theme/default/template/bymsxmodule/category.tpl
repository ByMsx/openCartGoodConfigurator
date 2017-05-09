<script type="text/ng-template" id="category-tree">
	<input ng-if="!category.categories" type="checkbox" ng-model="category.selected" ng-click="selectCategory(category.category_id, category.selected)">
    {{ category.name }}
	<ul ng-if="category.categories">
		<li ng-repeat="category in category.categories" ng-include="'category-tree'"></li>
	</ul>
</script>
<div ng-controller="categoryController">
	<h1>Выберите категории товаров:</h1>
	<ul><li ng-repeat="category in categories" ng-include="'category-tree'"></li></ul>
</div>