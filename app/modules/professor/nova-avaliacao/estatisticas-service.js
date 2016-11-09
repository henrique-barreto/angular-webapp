(function() {

	angular.module('app.professor')
	.service('EstatisticasService', function (AvaliacaoService) {

		var estatisticasService = this;

		this.alunoId = -1;
		this.avaliacoes = [];
		//grafico evolucao bf
		this.dadosBF = [];
		//grafico evolucao peso
		this.dadosPeso = []; 

		this.setAluno = function(alunoId){ 
			console.log('Setando id do aluno para estatisticas: ' + alunoId);
			estatisticasService.limparDados();
			console.log('Limpando dados ok');
			this.alunoId = alunoId;
		};

		this.limparDados = function(){
			this.alunoId = -1;
			this.avaliacoes = [];
			this.dadosBF = [];
			this.dadosPeso = []; 
		};

		this.getEstatisticas = function() {
			console.log('Pegando estatisticas...');
			
			return AvaliacaoService.getEstatisticas(this.alunoId)

		};


	});

})();