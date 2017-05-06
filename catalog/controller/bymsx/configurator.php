<?php

class Controllerbymsxconfigurator extends Controller {
	public function index() {
	    $this->response->setOutput($this->load->view("bymsxmodule/index"));
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
}

?>