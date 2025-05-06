const apiKey = 'SUA_CHAVE_API';  // Substitua com sua chave da OpenAI

async function enviarParaNyra() {
    const mensagem = document.getElementById("input").value;
    if (!mensagem) return;

    // Adiciona a mensagem do usuário na tela
    adicionarMensagem("Você: " + mensagem);

    // Envia a mensagem para a OpenAI API
    const resposta = await obterRespostaDaNyra(mensagem);
    
    // Adiciona a resposta de Nyra na tela
    adicionarMensagem("Nyra: " + resposta);
    
    // Limpa o campo de entrada
    document.getElementById("input").value = '';
}

async function obterRespostaDaNyra(mensagem) {
    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-4",  // Você pode mudar para o modelo que preferir
            prompt: mensagem,
            max_tokens: 150,
            temperature: 0.7
        })
    });

    const data = await response.json();
    return data.choices[0].text.trim();
}

function adicionarMensagem(texto) {
    const chatContent = document.getElementById("chat-content");
    const div = document.createElement("div");
    div.textContent = texto;
    chatContent.appendChild(div);
    chatContent.scrollTop = chatContent.scrollHeight;  // Rola para a última mensagem
}
