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

function gerarRespostaNyra(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("oi") || msg.includes("olá")) {
    return "Olá! Como posso ajudar você a ser mais produtivo hoje?";
  } else if (msg.includes("meta") || msg.includes("objetivo")) {
    return "Definir metas claras ajuda a manter o foco. Quer que eu te ajude a criar uma?";
  } else if (msg.includes("rotina")) {
    return "Organizar uma rotina diária é essencial. Você quer montar uma agora?";
  } else if (msg.includes("produtividade")) {
    return "Produtividade vem de consistência e organização. Vamos trabalhar nisso juntos!";
  } else if (msg.includes("motivação")) {
    return "Você já chegou até aqui, e isso já é um passo enorme. Continue firme!";
  } else {
    return "Estou aqui para te ajudar com foco, rotina e produtividade. Como posso ser útil?";
  }
}
