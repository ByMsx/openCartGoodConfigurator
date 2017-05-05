opencartConfiguratorApp.factory('selectionService', function () {
    return {
    	selectedCats: [],
    	selectedProducts: {},
    	currentCategory: 0,
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
    		this.selectedProducts[cat] = prod;
    	},
    	getSelectedProducts: function () {
    		return this.selectedProducts;
    	},
		getLastSelectedProduct: function () {
            return this.selectedProducts[this.currentCategory];
        },
    	nextCategoryId: function () {
    		if (this.selectedCats.length == 0) {
    			return -2;
    		}
    		if (this.currentCategory + 1 > this.selectedCats.length) {
    			return -1;
    		}
    		return this.selectedCats[this.currentCategory++];
    	}
    };
});