angular.module('startMean').controller('profileCtrl', function($scope, userFactory) {
    $scope.saveData = function() {
        console.log('test');
        var x = $scope.user.symptoms;
        $scope.user.symptoms = [];
        $scope.user.symptoms.push(x);
        console.log($scope.user);
        userFactory.create($scope.user).success(function(data) {
            $scope.dataUnsaved = false;
        });
    }
    $(document).ready(function() {
        $scope.user = {};
        $scope.dataUnsaved = true;
    })
});
