angular.module('profile')
  .controller('ProfileController', function($scope, $rootScope, $auth, $alert, $modal, Account) {

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
          $modal.open({
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
      var user = $scope.user;
      Account.addTruck(user)

      Account.updateProfile({
        displayName: $scope.user.displayName,
        username: $scope.user.username,
        email: $scope.user.email,
        phone: $scope.user.phone,
        truckWebsite: $scope.user.truckWebsite,
        truckName: $scope.user.truckName,
        truckDescription: $scope.user.truckDescription,
        truckImage: $scope.user.truckImage,
        truckTime: $scope.user.truckTime,
        truckLocation: {address: $scope.user.truckLocation.address, coords: {latitude: '', longitude: ''}},
        active: $scope.user.active

      }).success(function() {
        console.log("SUCCESSFUL THINGS");
        $alert({
          content: 'Profile has been updated',
          animation: 'fadeZoomFadeDown',
          type: 'material',
          duration: 3
        }).error(function(err) {
          console.log('I HAVE BUBBLED UP', err);
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
      });
    };

    $scope.deactivate = function() {
      Account.updateProfile({
        active: false
      });
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
