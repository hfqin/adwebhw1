/**
 * Created by HF Q on 2016/5/3.
 */
angular.module('networkModule',[])
.controller('NetworkCtrl',['$scope','$http',function($scope,$http){
    $http.get('js/data.json')
        .success(function(response){
            console.log(response);
            $scope.data = response;
        })
        .error(function(error){
            console.log(error);
        })
}])