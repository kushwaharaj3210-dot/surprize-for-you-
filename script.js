const btn = document.getElementById("revealBtn");
const messages = document.getElementById("messages");

btn.addEventListener("click", () => {
  messages.classList.toggle("hidden");
  createHearts();
});

function createHearts() {
  for (let i = 0; i < 10; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = "24px";
    heart.style.animation = "float 3s ease-in-out";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-100vh); opacity: 0; }
}`;
document.head.appendChild(style);