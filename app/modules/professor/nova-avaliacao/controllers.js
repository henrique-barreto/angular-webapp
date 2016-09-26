(function() {

	angular.module('app.professor')
	.controller('NovaAvaliacaoController', function($state, NovaAvaliacaoService, AvaliacaoService){

		this.aluno = NovaAvaliacaoService.getAluno();
		this.professor = NovaAvaliacaoService.getProfessor();

		this.anamnese = {};
		this.perimetria = {};
		this.dobras = {};

		this.etapa = 1;

		this.nextAnamnese = function () {
			NovaAvaliacaoService.setAnamnese(this.anamnese);
			$state.transitionTo('professor.novaAvaliacao.perimetria', {});
			this.etapa = 2;
		}

		this.nextPerimetria = function () {
			NovaAvaliacaoService.setPerimetria(this.perimetria);
			$state.transitionTo('professor.novaAvaliacao.dobras', {});
			this.etapa = 3;
		}

		this.nextDobras = function () {

			this.dobras = {
				'triceps': 15,
				'peitoral': 11,
				'abdominal': 24,
				'subescapular': 14,
				'axilarMedia': 14,
				'suprailiaca': 31,
				'femuralMedio': 17
			}

			NovaAvaliacaoService.setDobras(this.dobras);
			NovaAvaliacaoService.salvar()
			.success(function (data, status, headers, config) {


				console.log('Salvou agora pega resultado');
				AvaliacaoService.getResultado(data.id)			
				.success(function (data, status, headers, config) {
					alert('resultado ok.. logando: ' + status);
					console.log(data);
				}).error(function (data, status, headers, config) {
					alert('deu erro: ' + status);
				});

			}).error(function (data, status, headers, config) {
				alert('deu erro: ' + status);
			});

			$state.transitionTo('professor.novaAvaliacao.resultado', {});
			this.etapa = 4;
		}

	});

})();