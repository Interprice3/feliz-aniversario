function scrollToPhotos() {
  document.getElementById("homenagem").scrollIntoView({
    behavior: "smooth"
  });
}

const surpriseBtn = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");

surpriseBtn.addEventListener("click", () => {
  const isHidden = surprise.hasAttribute("hidden");

  if (isHidden) {
    surprise.removeAttribute("hidden");
    surpriseBtn.textContent = "💖 Fechar surpresa";
  } else {
    surprise.setAttribute("hidden", "");
    surpriseBtn.textContent = "🎁 Abrir surpresa";
  }
});

// Pequeno efeito de entrada nos cartões quando aparecem na tela.
const cards = document.querySelectorAll(".photo-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

cards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(25px)";
  card.style.transition = "opacity .7s ease, transform .7s ease";
  observer.observe(card);
});
