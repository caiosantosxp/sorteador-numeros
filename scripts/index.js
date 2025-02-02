
/** Variáveis do sistema*/
const sendButton = document.getElementById('send-button');
const tryButton = document.getElementById('try-button');
const quantityNumber = document.getElementById('quantity-number')
const startNumber = document.getElementById('start-number');
const endNumber = document.getElementById('end-number');

const noRepeat = document.getElementById('no-repeat');

const sorteioContainer = document.querySelector('.sorteio');
const resultContainer = document.querySelector('.result');

const divResultados = document.querySelector('.resultados');

// Função para aguarda alguns segundos
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/** Função para envio de números */
async function startRandomNumbers(){

  // Oculta o container do sorteio e mostrar o container de resultados
  sorteioContainer.classList.add('hidden');
  resultContainer.classList.remove('hidden');

  // Lista que vai guardar os números sorteados
  let numbers = [];

  // Loop para sortear os números
  for (let i = 0; i < quantityNumber.value; i++) {
    let randomNumber;

    // Verifica se a opção de não repetir está marcada e sorteia novamente se o número já está na lista
    do {
      randomNumber = Math.floor(Math.random() * (endNumber.value - startNumber.value) + startNumber.value);
    } while (noRepeat.checked && numbers.includes(randomNumber));

    // Adiciona o número sorteado na lista
    numbers.push(randomNumber);

    // Remove a classe de animação de todos os spans
    document.querySelectorAll("div.resultados span").forEach(span => span.className = "");

    // Adiciona a classe de animação ao span correspondente ao número sorteado
    divResultados.innerHTML += `<span class="animation">${randomNumber}</span>`;

    // Aguarda 3 segundos antes de sortear o próximo número
    await sleep(3000);
  }
}

// Função para limpar os números sorteados e ocultar o container de resultado
function clearNumbers(){
  sorteioContainer.classList.remove('hidden');
  resultContainer.classList.add('hidden');

  divResultados.innerHTML = '';
}

tryButton.addEventListener('click', clearNumbers);
sendButton.addEventListener('click', startRandomNumbers);