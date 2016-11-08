(function() {


	angular.module('app.secretaria')
	.controller('CadastroAlunoController', function($http, AlunoService){

		var controller = this;
		this.aluno = {};

		this.show = false;
		this.showErro = false;
		this.salvar = function() {

			AlunoService.adicionar(this.aluno)
			.success(function (data){
				controller.show = true;
				controller.showErro = false;
				controller.aluno = {};
			}).error(function (data, status, headers, config) {
				controller.showErro = true;
				controller.show = false;
			});

		};


	});

})();