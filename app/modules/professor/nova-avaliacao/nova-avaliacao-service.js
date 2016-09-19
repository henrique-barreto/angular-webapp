(function() {

	angular.module('app.professor')
	.service('NovaAvaliacaoService', function ($state, AuthService, AvaliacaoService) {

		var novaAvaliacaoService = this;

		this.aluno = {};
		this.anamnese = {};
		this.perimetria = {};
		this.dobras = {};

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
				alert('salvou!!');
			}).error(function (data, status, headers, config) {
				alert('deu erro: ' + status);
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
		
	});

})();