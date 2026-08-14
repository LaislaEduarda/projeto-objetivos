// Seleção dos elementos do DOM
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");

// Alternar abas
for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
      textos[j].classList.remove("ativo");
    }

    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");
  };
}

// Datas objetivo para cada uma das 4 atividades
const objetivos = [
  new Date("2026-09-31T23:59:59"), // Cursos na Alura
  new Date("2026-09-31T23:59:59"), // Projetos em JS
  new Date("2026-09-31T23:59:59"), // Portfolio
  new Date("2026-09-31T23:59:59")  // Atualizar currículo
];

// Função de cálculo do tempo restante
function calculaTempo(tempoObjetivo) {
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;

  if (tempoFinal <= 0) {
    return "Prazo Encerrado!";
  }

  let segundos = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;

  return `${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos`;
}

// Atualiza TODOS os 4 contadores na tela
function atualizaCronometro() {
  for (let i = 0; i < contadores.length; i++) {
    if (objetivos[i]) {
      contadores[i].textContent = calculaTempo(objetivos[i]);
    }
  }
}

// Executa na hora e atualiza a cada segundo
atualizaCronometro();
setInterval(atualizaCronometro, 1000);