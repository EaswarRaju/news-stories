(function(){
    var contactManager = angular.module('newsLister', ['ngRoute']);

    contactManager.config(function($routeProvider) {
        $routeProvider
            .when('/results', {
                templateUrl: 'app/views/results.html',
                controller: 'resultsController'
            })
            .when('/home', {
                templateUrl: 'app/views/search.html',
                controller: 'homeController'
            })
            .otherwise({
                redirectTo: '/home'
            });
    });

})();