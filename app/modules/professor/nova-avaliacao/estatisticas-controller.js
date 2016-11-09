(function() {

	angular.module('app.professor')
	.controller('AvaliacaoEstatisticasController', function(EstatisticasService){

		console.log('entrou no controller AvaliacaoEstatisticasController');
		var estatsCtrls = this;
		estatsCtrls.avaliacoes = [];
		estatsCtrls.graficoBf = {};
		estatsCtrls.graficoPeso = {};
		estatsCtrls.perimetriaInferiorDados = {};
		estatsCtrls.perimetriaSuperiorDados = {};
		estatsCtrls.perimetriaBracosDados = {};


		estatsCtrls.ultimaAvaliacao = {};

		this.pegarEstats = function () {
			console.log('chamou pegar stats');
			EstatisticasService.getEstatisticas().then ( function ( data ) {
				
				estatsCtrls.avaliacoes = data.data.avaliacoes;
				estatsCtrls.ultimaAvaliacao = estatsCtrls.avaliacoes[0];
				console.log(estatsCtrls.ultimaAvaliacao);
				estatsCtrls.graficoBf = data.data.graficoBf;
				estatsCtrls.graficoPeso = data.data.graficoPeso;

				estatsCtrls.perimetriaInferiorDados = data.data.perimetriaInferiorDados;
				estatsCtrls.perimetriaSuperiorDados = data.data.perimetriaSuperiorDados;
				estatsCtrls.perimetriaBracosDados = data.data.perimetriaBracosDados;

				construirEvolucaoBF(estatsCtrls.graficoBf);
				construirEvolucaoPeso(estatsCtrls.graficoPeso);

				construirGraficoPerimetriaInferior(estatsCtrls.perimetriaInferiorDados);
				construirGraficoPerimetriaSuperior(estatsCtrls.perimetriaSuperiorDados);
				construirGraficoPerimetriaBracos(estatsCtrls.perimetriaBracosDados);

			}, function(error){

			});
		};

	});

	function construirEvolucaoBF(graficoBf) {
		var ctx = document.getElementById("evolucao-gordura-grafico");
		var data5 = {
			labels: graficoBf.labels,
			datasets: [
			{
				label: "Percentual gordura",
				fill: false,
				backgroundColor: "#3399ff",
				borderColor: "#3399ff",
				pointBorderColor: "#3399ff",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 4,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(255,205,86,1)",
				pointHoverBorderColor: "rgba(255,205,86,1)",
				pointHoverBorderWidth: 2,
				data: graficoBf.dados
			}
			]
		};

		var options5 = {
		}

		var myPieChart5 = new Chart(ctx,{
			type: 'line',
			data: data5,
			options: options5
		});

	}

	function construirEvolucaoPeso(graficoPeso) {
		var ctx = document.getElementById("grafico-evolucao-peso");

		var data4 = {
			labels: graficoPeso.labels,
			datasets: [
			{
				label: "Peso (KG)",
				fill: false,
				backgroundColor: "#ff9999",
				borderColor: "red",
				pointBorderColor: "red",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 4,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(255,205,86,1)",
				pointHoverBorderColor: "rgba(255,205,86,1)",
				pointHoverBorderWidth: 2,
				data: graficoPeso.dados
			}
			]
		};

		var options4 = {
		}

		var myPieChart4 = new Chart(ctx,{
			type: 'line',
			data: data4,
			options: options4
		});
	}


	function construirGraficoPerimetriaInferior(dados) {
		var ctx = document.getElementById("chartMedidaInferior");

		var dataMedida16 = {
			labels: dados.labels,
			datasets: [
			{
				label: "Glúteo",
				fill: false,
				backgroundColor: "#ff9999",
				borderColor: "red",
				pointBorderColor: "red",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 4,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(255,205,86,1)",
				pointHoverBorderColor: "rgba(255,205,86,1)",
				pointHoverBorderWidth: 2,
				data: dados.dadosGluteo
			},
			{
				label: "Coxa superior",
				fill: false,
				backgroundColor: "#66ccff",
				borderColor: "blue",
				pointBorderColor: "blue",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 4,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(255,205,86,1)",
				pointHoverBorderColor: "rgba(255,205,86,1)",
				pointHoverBorderWidth: 2,
				data: dados.dadosCoxaSuperior
			},
			{
				label: "Coxa média",
				fill: false,
				backgroundColor: "#ff9900",
				borderColor: "#ff9900",
				pointBorderColor: "#ff9900",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 4,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(255,205,86,1)",
				pointHoverBorderColor: "rgba(255,205,86,1)",
				pointHoverBorderWidth: 2,
				data: dados.dadosCoxaMedia
			},
			{
				label: "Coxa inferior",
				fill: false,
				backgroundColor: "#006600",
				borderColor: "#006600",
				pointBorderColor: "#006600",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 4,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(255,205,86,1)",
				pointHoverBorderColor: "rgba(255,205,86,1)",
				pointHoverBorderWidth: 2,
				data: dados.dadosCoxaInferior
			}
			]
		};

		var optionsMedida16 = {
		}

		var chartLineMedida16 = new Chart(ctx,{
			type: 'line',
			data: dataMedida16,
			options: optionsMedida16
		});
	}


	function construirGraficoPerimetriaSuperior(dados) {

	}

	function construirGraficoPerimetriaBracos(dados) {
		var ctxMedida3 = document.getElementById("chartMedidaBracos");
		var dataMedida3 = {
			labels: dados.labels,
			datasets: [
			{
				label: "Ccontraido",
				fill: false,
				backgroundColor: "#ff9999",
				borderColor: "red",
				pointBorderColor: "red",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 4,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(255,205,86,1)",
				pointHoverBorderColor: "rgba(255,205,86,1)",
				pointHoverBorderWidth: 2,
				data: dados.dadosBicepsContraido
			},
			{
				label: "Bíceps",
				fill: false,
				backgroundColor: "#66ccff",
				borderColor: "blue",
				pointBorderColor: "blue",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 4,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(255,205,86,1)",
				pointHoverBorderColor: "rgba(255,205,86,1)",
				pointHoverBorderWidth: 2,
				data: dados.dadosBiceps
			},
			{
				label: "Antebraço",
				fill: false,
				backgroundColor: "#ff9900",
				borderColor: "#ff9900",
				pointBorderColor: "#ff9900",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 4,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(255,205,86,1)",
				pointHoverBorderColor: "rgba(255,205,86,1)",
				pointHoverBorderWidth: 2,
				data: dados.dadosAntebraco
			}
			]
		};

		var optionsMedida3 = {}

		var chartLineMedida3 = new Chart(ctxMedida3,{
			type: 'line',
			data: dataMedida3,
			options: optionsMedida3
		});

	}

})();


