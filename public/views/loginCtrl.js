angular.module('startMean').controller('loginCtrl', function($scope) {
    // $scope.user = {};
    $scope.loginUser = function(form) {
        console.log(form);
        if (form.$valid) {
            if ($scope.user.aadharOTP === 423) {
                localStorage.setItem('aadharId',$scope.user.aadharId);
                $("#goLink").trigger("click");
            }
        }
    }
    $(document).ready(function() {
        // $scope.loginUser();
        // getUsers();
    })
});
