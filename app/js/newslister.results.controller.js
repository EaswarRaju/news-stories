/**
 * Created by Easwar Raju on 12/25/2015.
 */

(function(){
    angular.module('newsLister').controller('resultsController', ['$scope', 'newsListerService', function($scope, newsListerService){

        $scope.resultData = newsListerService.resultsData;

        var showResults = function(response){
            newsListerService.resultsData = response.data.response;
            newsListerService.resultsData.searchTerm = $scope.resultData.searchTerm;
            $scope.resultData = newsListerService.resultsData;
        };

        $scope.getResults = function(searchTerm, pageNumber){
            if (pageNumber > 0 && $scope.resultData.pages >= pageNumber && $scope.resultData.currentPage != pageNumber) {
                newsListerService.getArticles(searchTerm, pageNumber).then(showResults);
            }
        };

    }]);
})();