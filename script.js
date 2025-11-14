document.addEventListener("DOMContentLoaded", () => {
  const btnMobile = document.getElementById("btn-mobile");
  const navMenu = document.getElementById("nav-menu");

  function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();

    navMenu.classList.toggle("active");

    const isActive = navMenu.classList.contains("active");
    btnMobile.setAttribute("aria-expanded", isActive);
    if (isActive) {
      btnMobile.setAttribute("aria-label", "Fechar Menu");
    } else {
      btnMobile.setAttribute("aria-label", "Abrir Menu");
    }
  }

  btnMobile.addEventListener("click", toggleMenu);
  btnMobile.addEventListener("touchstart", toggleMenu);

  const form = document.getElementById("contact-form");
  const nomeInput = document.getElementById("nome");
  const emailInput = document.getElementById("email");

  const nomeError = document.getElementById("nome-error");
  const emailError = document.getElementById("email-error");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let isValid = true;
    nomeError.textContent = "";
    emailError.textContent = "";
    nomeInput.style.borderColor = "#ccc";
    emailInput.style.borderColor = "#ccc";

    if (nomeInput.value.trim() === "") {
      nomeError.textContent = "O campo nome é obrigatório.";
      nomeInput.style.borderColor = "#dc3545";
      isValid = false;
    }

    if (emailInput.value.trim() === "") {
      emailError.textContent = "O campo e-mail é obrigatório.";
      emailInput.style.borderColor = "#dc3545";
      isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
      emailError.textContent = "Por favor, insira um e-mail válido.";
      emailInput.style.borderColor = "#dc3545";
      isValid = false;
    }

    if (isValid) {
      const toast = document.getElementById("success-toast");

      toast.classList.add("show");

      form.reset();

      setTimeout(() => {
        toast.classList.remove("show");
      }, 3000);
    }
  });

  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});

const btnAddCarrinho = document.getElementById("btn-add-carrinho");

if (btnAddCarrinho) {
  btnAddCarrinho.addEventListener("click", (event) => {
    event.preventDefault();

    btnAddCarrinho.textContent = "Adicionado! ✔";

    btnAddCarrinho.style.opacity = "0.7";
    btnAddCarrinho.style.pointerEvents = "none";

    setTimeout(() => {
      btnAddCarrinho.textContent = "Adicionar ao Carrinho";
      btnAddCarrinho.style.opacity = "1";
      btnAddCarrinho.style.pointerEvents = "auto";
    }, 2000);
  });
}
