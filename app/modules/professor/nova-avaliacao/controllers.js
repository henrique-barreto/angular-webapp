(function() {

	angular.module('app.professor')
	.controller('NovaAvaliacaoController', function($state, NovaAvaliacaoService, AvaliacaoService){

		var controller = this;
		this.aluno = NovaAvaliacaoService.getAluno();
		this.professor = NovaAvaliacaoService.getProfessor();

		this.anamnese = {};
		this.perimetria = {};
		this.dobras = {};
		this.resultado = {};
		this.etapa = 1;

		this.nextAnamnese = function () {

			this.anamnese = {
				'peso': 90,
				'altura': 183,
				'objetivo': 'Perder peso',
				'metaPeso': 88,
				'metaBF': 10
			};

			NovaAvaliacaoService.setAnamnese(this.anamnese);
			$state.transitionTo('professor.novaAvaliacao.perimetria', {});
			this.etapa = 2;
		}

		this.nextPerimetria = function () {

			this.perimetria = {
				'ombro': 123,
				'torax': 123,
				'abdominal': 123,
				'gluteo': 123,
				'coxaSuperior': 123,
				'coxaMedia': 123,
				'coxaInferior': 123,
				'bicepsContraido': 123,
				'biceps': 123,
				'antebraco': 123
			};

			NovaAvaliacaoService.setPerimetria(this.perimetria);
			$state.transitionTo('professor.novaAvaliacao.dobras', {});
			this.etapa = 3;
		}

		this.nextDobras = function () {

			this.etapa = 4;
			this.dobras = {
				'triceps': 11,
				'peitoral': 11,
				'abdominal': 24,
				'subescapular': 11,
				'axilarMedia': 14,
				'suprailiaca': 10,
				'femuralMedio': 17
			}

			NovaAvaliacaoService.setDobras(this.dobras);
			NovaAvaliacaoService.salvar();
			
		}

	});

})();