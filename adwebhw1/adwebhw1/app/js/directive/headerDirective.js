/**
 * Created by HF Q on 2016/5/3.
 */
angular.module('headerModule', [])
    .directive('appHeader', function () {
        return {
            restrict: 'EA',
            templateUrl: "template/directiveTpl/header.tpl.html"
        };
    })
.controller('pageSwitchCtrl',['$scope',function($scope){
    $scope.types=[{name:"main"},{name:"list"},{name:"form"},{name:"network"}];
}])