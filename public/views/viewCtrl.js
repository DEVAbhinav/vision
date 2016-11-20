angular.module('startMean').controller('viewCtrl', function($scope, userFactory) {
    $scope.params = {
        location: {
            lat: 0,
            long: 0
        }
    };
    $scope.setNerd = function() {
        userFactory.create($scope.nerd).success(function(data) {
            getUsers();
        });
    }
    $scope.filterDonor = function() {
        console.log($scope.params);
    }
    $(document).ready(function() {
        $scope.params.aadharId = localStorage.getItem("aadharId");
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position);
            $scope.params.location.lat = position.coords.latitude;
            $scope.params.location.long = position.coords.longitude;
        });
    })
});
