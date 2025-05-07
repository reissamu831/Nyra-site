function enviarMensagem() {
  const input = document.getElementById("mensagem");
  const texto = input.value.trim().toLowerCase();
  if (texto === "") return;

  const chat = document.getElementById("chat");

  const msgUsuario = document.createElement("p");
  msgUsuario.textContent = "Você: " + texto;
  chat.appendChild(msgUsuario);

  const resposta = gerarResposta(texto);
  const msgNyra = document.createElement("p");
  msgNyra.textContent = "Nyra: " + resposta;
  chat.appendChild(msgNyra);

  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}

function gerarResposta(msg) {
  const respostas = {
    "olá": "Oi! Como posso ajudar na sua produtividade hoje?",
    "bom dia": "Bom dia! Já organizou sua agenda de hoje?",
    "meta": "Qual é sua meta principal do dia?",
    "foco": "Dica de foco: 25 minutos de trabalho + 5 de pausa!",
    "cansado": "Faça uma pausa curta e respire. Você consegue!",
    "produtividade": "Organize suas tarefas em ordem de prioridade!",
    "estudar": "Blocos de 30 minutos de estudo são muito eficientes.",
    "obrigado": "Sempre à disposição!",
    "tchau": "Até logo! Continue se esforçando!"
  };

  for (const chave in respostas) {
    if (msg.includes(chave)) {
      return respostas[chave];
    }
  }

  return "Desculpe, não entendi. Pode repetir de outra forma?";
}

