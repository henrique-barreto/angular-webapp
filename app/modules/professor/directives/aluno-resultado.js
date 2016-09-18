(function() {

	angular.module('app.professor')
	.directive('alunoResultado', function() {
		return {
			restrict: 'E',
			templateUrl: 'app/modules/professor/views/aluno-resultado.html'
		};

	});

})();