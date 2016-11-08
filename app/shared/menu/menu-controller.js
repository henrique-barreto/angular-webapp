(function() {

	angular.module('app')
	.controller('MenuController', function(AuthService){

		this.usuario = AuthService.getCurrentUser();
		this.menus = [];

		if (this.usuario.permissao === 'ROLE_ALUNO') {
			this.menus = menuAluno;
		} else if (this.usuario.permissao === 'ROLE_PROFESSOR') {
			this.menus = menuProfessor;
		} else if (this.usuario.permissao === 'ROLE_SECRETARIA') {
			this.menus = menuSecretaria;
		}

		this.click = function() {
			// alert('hello');
		}
		
	});

})();


	var menuProfessor = 
		[
		  {
		    "nome": "Alunos",
		    "items": [
		      {
		        "state": "professor.buscar",
		        "nome": "Buscar alunos"
		      }
		    ]
		  },
		  {
		    "nome": "Treino",
		    "items": [	
		      {
		        "state": "professor.treinos",
		        "nome": "Meus treinos"
		      },
		      {
		        "state": "professor.solicitacoesTreino",
		        "nome": "Solicitações de treino"
		      }
		    ]
		  },
		  {
		    "nome": "Configuraçãoes",
		    "items": [
		      {
		        "state": "professor.treinos",
		        "nome": "Meus dados"
		      },
		      {
		        "state": "professor.solicitacoesTreino",
		        "nome": "Notificações"
		      }
		    ]
		  }
		]

		var menuSecretaria =
		[
		  {
		    "nome": "Alunos",
		    "items": [
		      {
		        "state": "secretaria.buscar",
		        "nome": "Buscar aluno"
		      },
		      {
		        "state": "secretaria.cadastrar",
		        "nome": "Cadastrar aluno"
		      }
		    ]
		  },
		  {
		    "nome": "Agendamentos",
		    "items": [
		      {
		        "state": "aluno.treino",
		        "nome": "Avaliações Físicas"
		      }
		    ]
		  },
		  {
		    "nome": "Configuraçãoes",
		    "items": [
		      {
		        "state": "aluno.meusDados",
		        "nome": "Meus dados"
		      },
		      {
		        "state": "aluno.notificacoes",
		        "nome": "Notificações"
		      }
		    ]
		  }
		]

		var menuAluno =
		[
		  {
		    "nome": "Avaliações Físicas",
		    "items": [
		      {
		        "state": "aluno.estatisticas",
		        "nome": "Estatísticas"
		      },
		      {
		        "state": "aluno.avaliacaoHistorico",
		        "nome": "Histórico"
		      },
		      {
		        "state": "aluno.avaliacaoAgendamento",
		        "nome": "Agendamento"
		      }
		    ]
		  },
		  {
		    "nome": "Treino",
		    "items": [
		      {
		        "state": "aluno.treino",
		        "nome": "Meu treino"
		      },
		      {
		        "state": "aluno.treinos",
		        "nome": "Histórico"
		      },
		      {
		        "state": "aluno.solicitarTreino",
		        "nome": "Solicitar novo treino"
		      }
		    ]
		  },
		  {
		    "nome": "Configuraçãoes",
		    "items": [
		      {
		        "state": "aluno.meusDados",
		        "nome": "Meus dados"
		      },
		      {
		        "state": "aluno.notificacoes",
		        "nome": "Notificações"
		      }
		    ]
		  }
		]