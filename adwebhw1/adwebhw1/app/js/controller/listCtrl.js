/**
 * Created by HF Q on 2016/5/3.
 */
angular.module('listModule',[])
.controller('ListCtrl',['$scope',function($scope){
    $scope.list=[{name:"张三"},{name:"李四"},{name:"王五"},{name:"小明"},{name:"小红"}];
}])