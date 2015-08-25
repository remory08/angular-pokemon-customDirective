var app = angular.module("pokemon", []);

app.controller('PokemonController', ['$scope', 'pokemonservice', function($scope, pokemonservice) {
  $scope.pokemen = [];
  pokemonservice.searchAll().then(function(data){
    $scope.pokemon = data.pokemon;
    // console.log(data.pokemon);
    var rando = Math.random()*500;
    rando = Math.round(rando)
    var x = rando + 10;
    for (i=rando; i < x; i ++) {
      pokemonservice.getDetails(data.pokemon[i].resource_uri).then(function(pokeMan) {
        // console.log(pokeMan.sprites[0].resource_uri);
        pokemonservice.getSprites(pokeMan.sprites[0].resource_uri).then(function(sprite) {
        pokeMan.image = 'http://pokeapi.co' + sprite.image;
        console.log(pokeMan);
        })
        $scope.pokemen.push(pokeMan);
      })
    }
    // inside first then function console.log(data.pokemon[0].resource_uri);
  })
}]);

app.directive('gsPokemon', function() {
  return {
    templateUrl: 'pokeDisplay.html',
    // scope: {
    //   pokedata: '=pokeData'
    // }
  };
});
