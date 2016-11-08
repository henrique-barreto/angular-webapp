(function() {

	angular.module('app.professor')
	.controller('AvaliacaoEstatisticasController', function(EstatisticasService){

		console.log('entrou no controller AvaliacaoEstatisticasController');
		this.data = EstatisticasService.getEstatisticas();
		
	});

})();


