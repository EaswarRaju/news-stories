/**
 * Created by Easwar Raju on 12/25/2015.
 */

(function(){
    angular.module('newsLister').controller('homeController', ['$scope', 'newsListerService', '$location', function($scope, newsListerService, $location){
        $scope.searchText = '';
        $scope.showErrMessage = false;

        $scope.searchSubmitted = false;

        var showResults = function(response){
            newsListerService.resultsData = response.data.response;
            newsListerService.resultsData.searchTerm = $scope.searchText;
            console.log(newsListerService.resultsData);
            $location.path('/results');
        };

        var showError = function () {
            $scope.showErrMessage = true;
        };

        $scope.getResults = function(){
            $scope.searchSubmitted = true;
            if ($scope.searchText){
                newsListerService.getArticles($scope.searchText).then(showResults, showError);
            }
        };

    }]);
})();