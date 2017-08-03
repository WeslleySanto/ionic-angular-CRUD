(function(){
  "use strict";

  angular.module("starter").value("Config", {

    //getUrl: "http://weslleyesanto.com.br/api/ionicAngularCRUD/"
    getUrl: "http://localhost/apiIonicAngularCRUD/"
  });

  angular.module("starter").service("Data", function($http, Config){

    //recuperação de dados
    this.getData = function(params){
      return $http({
        method: "POST",
        url: Config.getUrl + "apiRecupera.php",
        data: params,
        headers : { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
      });
    };

    //CADASTRO
    this.setData = function(dados){
      return $http({
        method: "POST",
        url: Config.getUrl + "apiCadastro.php",
        data: dados,
        headers : { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
      });
    };

    //DELETE
    this.delData = function(dados){
      return $http({
        method: "POST",
        url: Config.getUrl + "apiDeleta.php",
        data: dados,
        headers : { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
      });
    };
    
  });
})();