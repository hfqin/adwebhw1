/**
 * Created by HF Q on 2016/5/3.
 */
angular.module('formModule',[])
.controller('FormCtrl',['$scope',function($scope){
    $scope.user = 'John Doe';
    $scope.email = 'john.doe@gmail.com';
}])