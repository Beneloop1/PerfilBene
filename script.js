document.getElementById("welcome-message").innerText = " Bem-vindo! ";


// Efeitos flutuantes no fundo
function criarEfeitoFlutuante() {
  const efeito = document.createElement("div");
  efeito.classList.add("floating-effect");

  // Tamanho e posição aleatórios
  efeito.style.left = Math.random() * 100 + "vw";
  efeito.style.animationDuration = Math.random() * 10 + 5 + "s";
  document.body.appendChild(efeito);

  // Remover após a animação
  efeito.addEventListener("animationend", () => {
    efeito.remove();
  });
}

// Criar múltiplos efeitos flutuantes
setInterval(criarEfeitoFlutuante, 300);
