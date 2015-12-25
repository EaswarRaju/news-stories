/**
 * Created by Easwar Raju on 12/25/2015.
 */

(function(){
    angular.module('newsLister').service('newsListerService', ['$http', function ($http) {

        this.resultsData = {
            searchTerm : ''
        };

        this.getArticles = function(searchTerm){
            return $http({
                url : 'http://content.guardianapis.com/search?api-key=test&q=' + searchTerm + '&showfields=thumbnail,headline&show-tags=keyword&page=1&page-size=10',
                method : 'get'
            });
        };
    }]);
})();