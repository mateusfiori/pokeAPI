app.controller('serviceController', function ($scope, $http) {
    
    $scope.cont = 1;
    $scope.load = true;

    $http.get("https://pokeapi.co/api/v2/pokemon/" + $scope.cont + "/")
    .then(function(response) {
         $scope.pokedado = response.data.name;
         $scope.picture = response.data.sprites.front_default;
         $scope.peso = response.data.weight;
         $scope.hab1 = response.data.abilities["0"].ability.name;
         $scope.hab2 = response.data.abilities["1"].ability.name;
         $scope.tipo = response.data.types["1"].type.name;
         console.log('hhhh');

        }).finally(function() {
            // called no matter success or failure
            $scope.load = false;
            console.log("asdasd");
            console.log($scope.load);
           
          });
    



    $scope.plusOne = function () {
    $scope.cont += 1;
    $scope.load = true;

    if ($scope.cont > 151)
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
        }).finally(function() {
            // called no matter success or failure
            $scope.load = false;
            console.log($scope.load);
           
        });
    };

    $scope.minusOne = function () {
        $scope.cont -= 1;
        $scope.load = true;
        
        if ($scope.cont <= 0)
            $scope.cont = 151;

        $http.get("https://pokeapi.co/api/v2/pokemon/" + $scope.cont + "/")
        .then(function(response) {
            console.log($scope.cont)
            $scope.pokedado = response.data.name;
            $scope.picture = response.data.sprites.front_default;
            $scope.peso = response.data.weight;
            $scope.hab1 = response.data.abilities["0"].ability.name;
            $scope.hab2 = response.data.abilities["1"].ability.name;
            $scope.tipo = response.data.types["1"].type.name;
        }).finally(function() {
            // called no matter success or failure
            $scope.load = false;
            console.log($scope.load);
           
        });    
    };

    
});