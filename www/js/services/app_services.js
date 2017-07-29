(function(){
  "use strict";

  angular.module("starter").value("Config", {

    getUrl: "http://weslleyesanto.com.br/api/ionicAngularCRUD/"
  });

  angular.module("starter").service("Data", function($http, Config){
    //recuperação de dados
    this.getData = function(params){
      return $http({
        method: "POST",
        url: Config.getUrl + "apiRecupera.php",
        data: params,
        headers : {
                        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                    }
      });
    };
    
  });
})();