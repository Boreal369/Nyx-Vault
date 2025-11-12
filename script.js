// Aguarda o documento HTML carregar completamente antes de executar o script
document.addEventListener("DOMContentLoaded", () => {
  // Seleciona o botão e o menu pelos seus IDs
  const btnMobile = document.getElementById("btn-mobile");
  const navMenu = document.getElementById("nav-menu");

  // Função para alternar (adicionar/remover) a classe 'active'
  function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();

    // Adiciona ou remove a classe 'active' do menu
    navMenu.classList.toggle("active");

    // Atualiza os atributos de acessibilidade (ARIA)
    const isActive = navMenu.classList.contains("active");
    btnMobile.setAttribute("aria-expanded", isActive);
    if (isActive) {
      btnMobile.setAttribute("aria-label", "Fechar Menu");
    } else {
      btnMobile.setAttribute("aria-label", "Abrir Menu");
    }
  }

  // Adiciona o ouvinte de evento ao botão
  // 'click' é para mouse, 'touchstart' é para toque em telas móveis
  btnMobile.addEventListener("click", toggleMenu);
  btnMobile.addEventListener("touchstart", toggleMenu);

  // Seleciona os elementos do formulário
  const form = document.getElementById("contact-form");
  const nomeInput = document.getElementById("nome");
  const emailInput = document.getElementById("email");

  // Seleciona os spans de erro
  const nomeError = document.getElementById("nome-error");
  const emailError = document.getElementById("email-error");

  // Adiciona o ouvinte de evento 'submit' ao formulário
  form.addEventListener("submit", (event) => {
    // Previne o envio padrão do formulário
    event.preventDefault();

    // Reseta as mensagens de erro
    let isValid = true;
    nomeError.textContent = "";
    emailError.textContent = "";
    nomeInput.style.borderColor = "#ccc";
    emailInput.style.borderColor = "#ccc";

    // 1. Validação do Nome
    if (nomeInput.value.trim() === "") {
      nomeError.textContent = "O campo nome é obrigatório.";
      nomeInput.style.borderColor = "#dc3545";
      isValid = false;
    }

    // 2. Validação do E-mail
    if (emailInput.value.trim() === "") {
      emailError.textContent = "O campo e-mail é obrigatório.";
      emailInput.style.borderColor = "#dc3545";
      isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
      emailError.textContent = "Por favor, insira um e-mail válido.";
      emailInput.style.borderColor = "#dc3545";
      isValid = false;
    }

    // Se tudo estiver válido
    if (isValid) {
      alert("Formulário enviado com sucesso!");
      form.reset();
    }
  });

  // Função auxiliar para validar o formato do e-mail (básico)
  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});
