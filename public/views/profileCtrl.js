angular.module('startMean').controller('profileCtrl', function($scope, userFactory) {
  $scope.nerd = {};

  function getUsers() {
    userFactory.get().success(function(data) {
      $scope.users = data;
    });
  }
  $scope.setNerd = function() {
    userFactory.create($scope.nerd).success(function(data) {
      getUsers();
    });
  }
  $(document).ready(function() {
    // getUsers();
  })
});
