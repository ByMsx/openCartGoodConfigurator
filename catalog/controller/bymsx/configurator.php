<?php

class Controllerbymsxconfigurator extends Controller {
	public function index() {
	    $this->load->language("bymsx/configurator");
	    
	    $this->document->setTitle($this->language->get("title"));
	    $this->document->addScript("/catalog/view/javascript/angular.min.js");
        $this->document->addScript("/catalog/view/javascript/angular-route.js");
        $this->document->addScript("/catalog/view/javascript/index.js");
        $this->document->addScript("/catalog/view/javascript/service/nativeOpenCartService.js");
        $this->document->addScript("/catalog/view/javascript/service/data.js");
        $this->document->addScript("/catalog/view/javascript/service/selection.js");
        $this->document->addScript("/catalog/view/javascript/controller/category.js");
        $this->document->addScript("/catalog/view/javascript/controller/products.js");

        $this->document->addStyle("/catalog/view/theme/default/stylesheet/bymsx/index.css");

	    $data['lng_button_next'] = $this->language->get("button_next");

	    $data['column_left'] = $this->load->controller('common/column_left');
        $data['column_right'] = $this->load->controller('common/column_right');
        $data['content_top'] = $this->load->controller('common/content_top');
        $data['content_bottom'] = $this->load->controller('common/content_bottom');
        $data['footer'] = $this->load->controller('common/footer');
        $data['header'] = $this->load->controller('common/header');

	    $this->response->setOutput($this->load->view("bymsxmodule/index", $data));
	}

	public function api() {
	    $this->load->model('catalog/category');
        $this->load->model('catalog/product');

		if (array_key_exists('category', $this->request->get)) {
            $data['data'] = $this->model_catalog_category->getCategories();
        }

        if (array_key_exists('products', $this->request->get)) {
            $data['data'] = $this->model_catalog_product->getProducts(array('filter_category_id' => $this->request->get['products']));
        }

        $format = "json";
        if (array_key_exists('format', $this->request->get)) {
            $format = $this->request->get['format'];
        }

        $this->response->setOutput($this->load->view("bymsxmodule/" . $format . ".tpl", $data));
	}

	public function view() {
	    $this->load->language("bymsx/configurator");

	    $data['lng_select_cats']        = $this->language->get('select_cats');
	    $data['lng_select_products']    = $this->language->get('select_products');

	    $view = $this->request->get['path'];
	    $this->response->setOutput($this->load->view("bymsxmodule/" . $view . ".tpl", $data));
	}
}

?>