angular.module('startMean', ['ngRoute']).config(function($routeProvider) {
    // route for the home page
    $routeProvider
        .when('/', {
            templateUrl: '/views/login.html',
            controller: 'loginCtrl'
        })
        .when('/view', {
            templateUrl: '/views/filter.html',
            controller: 'viewCtrl'
        })
        .when('/profile', {
            templateUrl: '/views/details.html',
            controller: 'profileCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});
