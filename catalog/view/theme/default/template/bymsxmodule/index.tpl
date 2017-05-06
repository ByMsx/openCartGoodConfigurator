<?php echo $header; ?>
<div class="container">
    <?php echo $content_top; ?>
    <?php echo $column_left; ?>
    <div class="row">
        <div ng-app="opencartConfigurator" ng-controller="mainController" id="configuratorMain">
            <div id="configuratorBody">
                <div ng-show="loading" id="loading"><img src="/catalog/view/theme/default/image/ajax-loader.gif"></div>
                <div ng-view ng-hide="loading" id="configuratorViewBody"></div>
            </div>
            <button ng-click="next()"><?php echo $lng_button_next; ?></button>
        </div>
    </div>
    <?php echo $column_right; ?>
    <?php echo $content_bottom; ?>
</div>
<?php echo $footer; ?>