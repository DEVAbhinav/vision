angular.module('startMean').controller('viewCtrl', function($scope, userFactory, donorFactory) {
    $scope.params = {
        location: {
            lat: 0,
            long: 0
        }
    };
    $scope.donors = [];
    $scope.filterDonor = function() {
        $scope.donors = [];
        donorFactory.getList($scope.params).success(function(donors) {
            console.log(donors);
            $scope.donors = donors;
        });
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
