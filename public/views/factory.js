angular.module('startMean').factory('userFactory', function($http) {
        var urlBase = '/consult';
        return {
            create: function(blogData) {
                return $http.post(urlBase, blogData);
            }
        }
    })
    .factory('donorFactory', function($http) {
        var urlBase = '/find';
        return {
            getList: function(data) {
                return $http.post(urlBase,data);
            }
        }
    });
