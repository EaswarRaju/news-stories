/**
 * Created by Easwar Raju on 12/25/2015.
 */

(function(){
    angular.module('newsLister').controller('resultsController', ['$scope', 'newsListerService', function($scope, newsListerService){
        $scope.resultData = newsListerService.resultsData;
    }]);
})();