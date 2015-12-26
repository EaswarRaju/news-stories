/**
 * Created by Easwar Raju on 12/25/2015.
 */

(function(){
    angular.module('newsLister').controller('resultsController', ['$scope', 'newsListerService', function($scope, newsListerService){

        $scope.resultData = newsListerService.resultsData;
        $scope.newSearchTerm = '';

        var showResults = function(response){
            newsListerService.resultsData = response.data.response;
            newsListerService.resultsData.searchTerm = $scope.newSearchTerm;
            $scope.resultData = newsListerService.resultsData;
        };

        var showError = function(){
            $scope.resultData.results = [];
            $scope.resultData.searchTerm = $scope.newSearchTerm;
        };

        $scope.getResults = function(searchTerm, pageNumber){
            $scope.newSearchTerm = searchTerm;
            if (searchTerm !== $scope.resultData.searchTerm || (pageNumber > 0 && $scope.resultData.pages >= pageNumber && $scope.resultData.currentPage != pageNumber)) {
                newsListerService.getArticles(searchTerm, pageNumber).then(showResults, showError);
            }
        };

    }]);
})();