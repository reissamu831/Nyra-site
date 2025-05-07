function sendMessage() {
  const userInput = document.getElementById('user-input').value;
  if (userInput.trim() !== "") {
    const chatBox = document.getElementById('chat-box');
    
    // Cria a mensagem do usuário
    const userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);
    
    // Limpa o campo de entrada
    document.getElementById('user-input').value = '';
    
    // Resposta da IA Hyra
    setTimeout(() => {
      const botMessage = document.createElement('div');
      botMessage.classList.add('bot-message');
      botMessage.textContent = "Hyra: Oi, você disse: " + userInput;
      chatBox.appendChild(botMessage);
      chatBox.scrollTop = chatBox.scrollHeight; // Rola para o final da conversa
    }, 500);
  }
}

