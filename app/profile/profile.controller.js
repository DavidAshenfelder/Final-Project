angular.module('profile')
  .controller('ProfileController', function($scope, $rootScope, $auth, $alert, Account) {

    /**
     * Get user's profile information.
     */
    $scope.getProfile = function() {
      Account.getProfile()
        .success(function(data) {
          $scope.user = data;
          $rootScope.username = data.username;
          $rootScope.active = data.active;

        })
        .error(function(error) {
          $alert({
            content: error.message,
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        });
    };

    /**
     * Update user's profile information.
     */
    $scope.updateProfile = function() {
      Account.updateProfile({
        displayName: $scope.user.displayName,
        username: $scope.user.username,
        email: $scope.user.email,
        phone: $scope.user.phone,
        truckWebsite: $scope.user.truckWebsite,
        truckName: $scope.user.truckName,
        truckImage: $scope.user.truckImage,
        truckTime: $scope.user.truckTime,
        truckLocation: $scope.user.truckLocation,
        active: $scope.user.active
      }).success(function() {
        $alert({
          content: 'Profile has been updated',
          animation: 'fadeZoomFadeDown',
          type: 'material',
          duration: 3
        });
      });
    };

    $scope.activate = function() {
      Account.updateProfile({
       active: true
      }).then(function() {
        $alert({
          content: 'Truck has been activated',
          animation: 'fadeZoomFadeDown',
          type: 'material',
          duration: 3
        });
      }).then(function () {
        Account.addTruck()
      })
    };

    $scope.deactivate = function() {
      Account.updateProfile({
        active: false
      })
    };

    $scope.deleteProfile = function() {
      Account.deleteProfile().then(function() {
        $alert({
          content: 'Profile has been Deleted',
          animation: 'fadeZoomFadeDown',
          type: 'material',
          duration: 3
        });
      });
    };

    /**
     * Link third-party provider.
     */
    $scope.link = function(provider) {
      $auth.link(provider)
        .then(function() {
          $alert({
            content: 'You have successfully linked ' + provider + ' account',
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        })
        .then(function() {
          $scope.getProfile();
        })
        .catch(function(response) {
          $alert({
            content: response.data.message,
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        });
    };

    /**
     * Unlink third-party provider.
     */
    $scope.unlink = function(provider) {
      $auth.unlink(provider)
        .then(function() {
          $alert({
            content: 'You have successfully unlinked ' + provider + ' account',
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        })
        .then(function() {
          $scope.getProfile();
        })
        .catch(function(response) {
          $alert({
            content: response.data ? response.data.message : 'Could not unlink ' + provider + ' account',
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        });
    };

    $scope.getProfile();

  });
