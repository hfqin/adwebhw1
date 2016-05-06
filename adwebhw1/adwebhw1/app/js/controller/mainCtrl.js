/**
 * Created by HF Q on 2016/5/3.
 */
angular.module('mainModule',[])
.controller('MainCtrl',['$scope',function($scope){
    $scope.username="hfqin";

    $scope.names=[{name:"KAI",country:"Denmark"},{name:"JANI",country:"Norway"},{name:"HEGE",country:"Sweden"}];
}])