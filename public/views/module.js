angular.module('startMean', ['ngRoute', 'nerd']).config(function($routeProvider) {
    // route for the home page
    $routeProvider
        .when('/', {
            templateUrl: '/views/login.html'
                // controller: 'mainCtrl'
        })
        .when('/view', {
            templateUrl: '/views/filter.html'
                // controller: 'mainCtrl'
        })
        .when('/profile', {
            templateUrl: '/views/details.html'
                // controller: 'mainCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});
