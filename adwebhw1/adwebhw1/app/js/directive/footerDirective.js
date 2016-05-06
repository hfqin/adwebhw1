/**
 * Created by HF Q on 2016/5/3.
 */
angular.module('footerModule', [])
    .directive('appFooter', function () {
        return {
            restrict: 'EA',
            templateUrl: "template/directiveTpl/footer.tpl.html"
        };
    })