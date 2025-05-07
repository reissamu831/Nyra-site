document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const input = document.querySelector("input");
  const mensagem = input.value.trim();
  const chat = document.querySelector(".chat");

  if (mensagem === "") return;

  // Exibe a mensagem do usuário
  const msgUsuario = document.createElement("p");
  msgUsuario.textContent = `Você: ${mensagem}`;
  chat.appendChild(msgUsuario);

  // Gera a resposta da Nyra
  const resposta = gerarRespostaNyra(mensagem);

  const msgNyra = document.createElement("p");
  msgNyra.textContent = `Nyra: ${resposta}`;
  chat.appendChild(msgNyra);

  input.value = "";
});

function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message === "") return;

  const chatBox = document.getElementById("chat-box");

  // Exibe a mensagem do usuário
  const userMsg = document.createElement("div");
  userMsg.textContent = "Você: " + message;
  userMsg.style.fontWeight = "bold";
  chatBox.appendChild(userMsg);

  // Resposta automática
  const botMsg = document.createElement("div");
  botMsg.textContent = "Bot: " + gerarResposta(message);
  chatBox.appendChild(botMsg);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

function gerarResposta(texto) {
  texto = texto.toLowerCase();
  if (texto.includes("oi") || texto.includes("olá")) {
    return "Olá! Como posso ajudar?";
  } else if (texto.includes("tudo bem")) {
    return "Tudo ótimo, obrigado por perguntar!";
  } else {
    return "Desculpe, não entendi. Pode tentar de outra forma?";
  }
}
