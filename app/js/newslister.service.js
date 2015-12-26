/**
 * Created by Easwar Raju on 12/25/2015.
 */

(function(){
    angular.module('newsLister').service('newsListerService', ['$http', function ($http) {

        this.resultsData = {
            searchTerm : ''
        };

        this.getArticles = function(searchTerm, pageNumber){
            return $http({
                url : 'http://content.guardianapis.com/search?api-key=test&q=' + searchTerm + '&showfields=thumbnail,headline&show-tags=keyword&page=' + pageNumber + '&page-size=10',
                method : 'get'
            });
        };
    }]);
})();