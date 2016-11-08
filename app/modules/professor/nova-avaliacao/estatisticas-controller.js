(function() {

	angular.module('app.professor')
	.controller('AvaliacaoEstatisticasController', function(EstatisticasService){

		console.log('entrou no controller AvaliacaoEstatisticasController');

		var estatsCtrls = this;

		this.avaliacoes = [];
		//grafico evolucao bf
		this.dadosBF = [];
		//grafico evolucao peso
		this.dadosPeso = []; 
		
/*		EstatisticasService.getEstatisticas()
		.success(function (data, status, headers, config) {
			console.log('Pegando estatisticas ok.');
			console.log(data);
			estatsCtrls.avaliacoes = data.avaliacoes;
			estatsCtrls.dadosBF = data.dadosBF;
			estatsCtrls.dadosPeso = data.dadosPeso;
		}).error(function (data, status, headers, config) {
			alert('Erro ao pegar estatisticas do aluno: ' + status);
		});*/


	});

})();


