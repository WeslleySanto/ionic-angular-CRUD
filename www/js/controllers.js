angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, Data) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.home = 'Home';
  $scope.perfil = 'Perfil';
  $scope.usuarios = 'Usuários';
  $scope.sair = 'Sair';

  $scope.usuarios_lista = [];

  var getData = function(){
     var params = {
        counter: $scope.usuarios_lista.length,
        token: '1f3d2gs3f2fg3as2fdg3re2t1we46er45'
     };

     Data.getData(params).success(function(data){
        $scope.usuarios_lista = data;
     }).error(function(data){
        console.log(data ? data : 'Não foi possível acessar o servidor');
     });

  };

  getData();

});
