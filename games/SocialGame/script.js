// Dados de exemplo
const desafios = {
  escola: {
      titulo: "Desafio na Escola",
      descricao: "Inicie uma conversa com um colega sobre um assunto que vocês gostem.",
      respostaCorreta: "Estou curioso sobre o que você acha de..."
  },
  festa: {
      titulo: "Desafio na Festa",
      descricao: "Responda a pergunta: Como você se sentiria se encontrasse um amigo de longa data na festa?",
      respostaCorreta: "Eu me sentiria feliz e surpreso!"
  }
};

let desafioAtual = {};

// Lista de palavras-chave para sentimentos positivos e negativos
const palavrasPositivas = ["feliz", "felicidade", "alegria", "contento", "entusiasmado", "satisfeito", "animado", "positivo"];
const palavrasNegativas = ["triste", "deprimido", "desapontado", "desmotivado", "infeliz", "negativo", "desesperado"];

// Função para iniciar o jogo com o cenário escolhido
function startGame(cenario) {
  desafioAtual = desafios[cenario];
  document.getElementById('cenario').style.display = 'none';
  document.getElementById('desafio-container').style.display = 'block';
  document.getElementById('desafio-titulo').innerText = desafioAtual.titulo;
  document.getElementById('desafio-descricao').innerText = desafioAtual.descricao;
}

// Função para verificar o sentimento da resposta
function verificarSentimento(resposta) {
  const respostaLower = resposta.toLowerCase();
  let pontuacao = 0;

  // Verificar palavras positivas
  palavrasPositivas.forEach(palavra => {
      if (respostaLower.includes(palavra)) {
          pontuacao++;
      }
  });

  // Verificar palavras negativas
  palavrasNegativas.forEach(palavra => {
      if (respostaLower.includes(palavra)) {
          pontuacao--;
      }
  });

  return pontuacao > 0;  // Resposta positiva se a pontuação for maior que 0
}

// Função para enviar a resposta
function submitResponse() {
  const resposta = document.getElementById('resposta').value.trim();
  const resultado = document.getElementById('resultado');
  const resultadoContainer = document.getElementById('resultado-container');
  
  if (resposta.toLowerCase() === desafioAtual.respostaCorreta.toLowerCase()) {
      resultado.innerText = "Resposta Correta! Bom trabalho!";
  } else {
      resultado.innerText = "Resposta Incorreta. Tente novamente!";
  }
  
  document.getElementById('desafio-container').style.display = 'none';
  resultadoContainer.style.display = 'block';
}
