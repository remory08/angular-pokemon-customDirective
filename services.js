app.factory('pokemonservice', ["$http", "$q", function($http, $q) {
  var pokemonservice = {};
  var baseUrl = "http://pokeapi.co/"
  var pokedex = "api/v1/pokedex/1/"
  var singlePokemon = "api/v1/pokemon/"

  // pokemonservice.setSearchTerm = function(term) {
  //   searchTerm = encodeURIComponent(term);
  // }
  //
  // pokemonservice.getSearchTerm = function() {
  //   return decodeURIComponent(searchTerm);
  // }

  pokemonservice.searchAll = function() {

    var url = baseUrl + pokedex;

    var deferred = $q.defer();

    $http.get(url).success(function(data) {
      deferred.resolve(data);
    }).error(function() {
      deferred.reject("Error!")
    });

    // console.log(deferred.promise);

    return deferred.promise;
  }

pokemonservice.getDetails = function(uri) {
  var url = baseUrl + uri;
  var deferred = $q.defer();

  $http.get(url).success(function(data) {
    deferred.resolve(data);
  }).error(function() {
    deferred.reject("Error!")
  });

  // console.log(deferred.promise);

  return deferred.promise;
}

pokemonservice.getSprites = function(uri) {
  var url = baseUrl + uri;
  var deferred = $q.defer();

  $http.get(url).success(function(data) {
    deferred.resolve(data);
  }).error(function() {
    deferred.reject("Error!")
  });

  // console.log(deferred.promise);

  return deferred.promise;
}

pokemonservice.getAbilities = function(pokemon) {
  for (i=0; i< pokemen.abilities.length; i++) {
    pokemen.abilities
  }
}
 return pokemonservice;
}]);
