angular.module('starter.controllers', [])

.controller('DashCtrl', ['$scope', function($scope) {
    $scope.button = {
        "text": "Start Tracking",
        "class": "button-balanced"
    };

    $scope.toggle = function() {
        if ($scope.button.text === "Start Tracking") {
            $scope.button = {
                "text": "Stop Tracking",
                "class": "button-assertive"
            };
        } else {
            $scope.button = {
                "text": "Start Tracking",
                "class": "button-balanced"
            };
        }
    };
}])

.controller('FriendsCtrl', ['$scope', 'Friends', function($scope, Friends) {
  $scope.friends = Friends.all();
}])

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('SettingsCtrl',['$scope', 'FUEL_TYPE', 'DISTANCE_UNIT', '$ionicPopup', '$rootScope', function($scope, FUEL_TYPE, DISTANCE_UNIT, $ionicPopup, $rootScope) {
    
    $rootScope.user = {
        fuelType : "Petrol",
        distanceUnit: "Km"
    };
    
    $scope.showSelectionPopupFuel = function(){
        var fuelPopup = $ionicPopup.alert({
          title: 'Select Fuel Type',
          templateUrl: 'templates/settings-fuel.html'
        });       
    };
    $scope.showSelectionPopupDistance = function(){
        var distancePopup = $ionicPopup.alert({
          title: 'Select Distance Unit',
          templateUrl: 'templates/settings-distance.html'
        });       
    };
}])

.controller('SettingFuelCtrl',['$scope','FUEL_TYPE','FuelService','$rootScope', function($scope, FUEL_TYPE, FuelService, $rootScope){
    $scope.fuelType = JSON.parse(FUEL_TYPE);
    
    $scope.fuelTypeChange = function(fuelTypeValue){
       $rootScope.user.fuelType = fuelTypeValue;
       $scope.fuelType = FuelService.update(fuelTypeValue);
    };
    
}])

.controller('SettingDistanceCtrl',['$scope','DISTANCE_UNIT','DistanceService','$rootScope', function($scope, DISTANCE_UNIT, DistanceService, $rootScope){
    $scope.distanceUnit = JSON.parse(DISTANCE_UNIT);
    
    $scope.distanceUnitChange = function(distanceUnitValue){
       $rootScope.user.distanceUnit = distanceUnitValue;
       $scope.distanceUnit = DistanceService.update(distanceUnitValue);
    };
    
}]);
