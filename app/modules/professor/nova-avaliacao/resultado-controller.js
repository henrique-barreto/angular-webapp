(function() {

	angular.module('app.professor')
	.controller('AvaliacaoResultadoController', function(NovaAvaliacaoService){

		var resultadoController = this;

		this.resultado = {};

		NovaAvaliacaoService.getResultado()
		.success(function (data, status, headers, config) {
			console.log(data);
			resultadoController.resultado = data;
			construirGraficoGordura(resultadoController.resultado.cardGordura.data);
			construirGraficoPeso(resultadoController.resultado.cardGordura.data);
		}).error(function (data, status, headers, config) {
			alert('Erro ao gerar resultado: ' + status);
		});
	});


	function construirGraficoGordura(dados) {
		var ctx = document.getElementById("grafico-resultado-gordura");
		var data = {
			labels: ["Gordura", "Massa magra"],
			datasets: [
			{
				data: dados,
				backgroundColor: [
				"red",
				"#36A2EB",
				],
				hoverBackgroundColor: [
				"#FF6384",
				"#36A2EB"
				]
			}]
		};
		var options = {}
		var myPieChart = new Chart(ctx,{
			type: 'pie',
			data: data,
			options: options
		});
	}

	function construirGraficoPeso(dados) {
		var ctx = document.getElementById("grafico-resultado-peso");
		var data2 = {
			labels: [],
			datasets: [
			{
				data: dados,
				backgroundColor: [
				"red",
				"#36A2EB",
				]
			}]
		};
		var options2 = {
			cutoutPercentage: 80,
		}
		var myPieChart2 = new Chart(ctx,{
			type: 'doughnut',
			data: data2,
			options: options2
		});
	}
})();


