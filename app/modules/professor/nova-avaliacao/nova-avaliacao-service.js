(function() {

	angular.module('app.professor')
	.service('NovaAvaliacaoService', function ($state, AuthService, AvaliacaoService, EstatisticasService) {

		var novaAvaliacaoService = this;

		this.aluno = {};
		this.anamnese = {};
		this.perimetria = {};
		this.dobras = {};
		this.id = -1;

		this.novaAvaliacao = function(aluno){ 
			novaAvaliacaoService.limparDados();
			this.aluno = aluno;
			$state.transitionTo('professor.novaAvaliacao.anamnese', {});
		};

		this.limparDados = function(){
			this.aluno = {};
			this.anamnese = {};
			this.perimetria = {};
			this.dobras = {};
		}

		this.getAluno = function (){
			return this.aluno;
		}

		this.getProfessor = function (){
			return AuthService.getCurrentUser();
		}

		this.salvar = function() {
			console.log('Salvando avaliacao');

			var avaliacao = {
				anamnese: this.anamnese,
				perimetria: this.perimetria,
				dobras: this.dobras
			}

			var professor = novaAvaliacaoService.getProfessor();

			AvaliacaoService.salvar(avaliacao, this.aluno.id, professor.id)
			.success(function (data, status, headers, config) {
				console.log('Salvou avaliacao...');
				console.log('Setando id: ' + data.id);
				novaAvaliacaoService.id = data.id;

				EstatisticasService.setAluno(novaAvaliacaoService.aluno.id);
				console.log('Nava avaliacao service: mundando para view resultado');
				$state.transitionTo('professor.novaAvaliacao.resultado', {});
			}).error(function (data, status, headers, config) {
				alert('Erro ao salvar avaliacao ' + status);
			});

		}


		//===
		this.setAnamnese = function (anamnese) {
			this.anamnese = anamnese;
		};

		this.setDobras = function (dobras) {
			this.dobras = dobras;
		};

		this.setPerimetria = function (perimetria) {
			this.perimetria = perimetria;
		};
		
		this.getResultado = function () {
			return AvaliacaoService.getResultado(this.id);			
		};
	});

})();