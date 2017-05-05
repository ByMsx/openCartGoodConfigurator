opencartConfiguratorApp.factory('selectionService', function () {
    var selectedProducts = {};
    return {
    	selectedCats: [],
    	currentCategory: -1,
    	selectCategory: function (category, sel) {
    		if (sel) {
    			for (var i = 0; i < this.selectedCats.length; i++) {
    				if (this.selectedCats[i] == category) {
    					return;
    				}
    			}
    			this.selectedCats.push(category);
    		} else {
    			for (var i = 0; i < this.selectedCats.length; i++) {
    				if (this.selectedCats[i] == category) {
    					this.selectedCats.splice(i, 1);
    					break;
    				}
    			}
    		}
    	},
    	selectProduct: function (cat, prod) {
    		selectedProducts[cat] = prod;
            console.log("Select: ", selectedProducts[cat]);
    	},
    	getSelectedProducts: function () {
    		return selectedProducts;
    	},
		getLastSelectedProduct: function () {
            return selectedProducts[this.selectedCats[this.currentCategory]];
        },
    	nextCategoryId: function () {
            ++this.currentCategory;

    		if (this.selectedCats.length == 0) {
    			return -2;
    		}
    		if (this.currentCategory == this.selectedCats.length) {
    			return -1;
    		}
    		return this.selectedCats[this.currentCategory];
    	}
    };
});