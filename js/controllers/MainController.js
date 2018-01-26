app.controller('MainController', ['$scope', '$http', function($scope, $http) {
    
    $scope.cont = 1;

    $http.get("https://pokeapi.co/api/v2/pokemon/" + $scope.cont + "/")
    .then(function(response) {
         console.log($scope.cont)
         $scope.pokedado = response.data.name;
         $scope.picture = response.data.sprites.front_default;
         $scope.peso = response.data.weight;
         $scope.hab1 = response.data.abilities["0"].ability.name;
         $scope.hab2 = response.data.abilities["1"].ability.name;
         $scope.tipo = response.data.types["1"].type.name;
     });

    $scope.plusOne = function () {
        $scope.cont += 1;

        if ($scope.cont > 149)
        $scope.cont = 0;

        $http.get("https://pokeapi.co/api/v2/pokemon/" + $scope.cont + "/")
        .then(function(response) {
             console.log($scope.cont)
             $scope.pokedado = response.data.name;
             $scope.picture = response.data.sprites.front_default;
             $scope.peso = response.data.weight;
             $scope.hab1 = response.data.abilities["0"].ability.name;
             $scope.hab2 = response.data.abilities["1"].ability.name;
             $scope.tipo = response.data.types["1"].type.name;
         });
    };
    
    $scope.minusOne = function () {
        $scope.cont -= 1;
        
        if ($scope.cont < 0)
            $scope.cont = 149;

        $http.get("https://pokeapi.co/api/v2/pokemon/" + $scope.cont + "/")
        .then(function(response) {
            console.log($scope.cont)
            $scope.pokedado = response.data.name;
            $scope.picture = response.data.sprites.front_default;
            $scope.peso = response.data.weight;
            $scope.hab1 = response.data.abilities["0"].ability.name;
            $scope.hab2 = response.data.abilities["1"].ability.name;
            $scope.tipo = response.data.types["1"].type.name;
        });    
    };
    
}]);

