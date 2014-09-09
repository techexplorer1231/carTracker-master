angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})

.factory('FuelService',['FUEL_TYPE' , function(FUEL_TYPE){
  var temp = JSON.parse(FUEL_TYPE);
  return{
    update:function(fuelTypeValue) {
      angular.forEach(temp, function(value, key) {
        if(fuelTypeValue === key){
          temp[key] = true;
        }
        else{
          temp[key] = false;          
        }
      });
      return temp;
    }
  };
}])

.factory('DistanceService',['DISTANCE_UNIT' , function(DISTANCE_UNIT){
  var temp = JSON.parse(DISTANCE_UNIT);
  return{
    update:function(distanceUnitValue) {
      angular.forEach(temp, function(value, key) {
        if(distanceUnitValue === key){
          temp[key] = true;
        }
        else{
          temp[key] = false;          
        }
      });
      return temp;
    }
  };
}]);
