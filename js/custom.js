document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".carousel-card");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let current = 0;

  function updateCarousel() {
    cards.forEach((card, index) => {
      card.classList.remove("active", "left", "right");
      if (index === current) {
        card.classList.add("active");
      } else if (index === (current - 1 + cards.length) % cards.length) {
        card.classList.add("left");
      } else if (index === (current + 1) % cards.length) {
        card.classList.add("right");
      }
    });
  }

  if (prevBtn && nextBtn && cards.length > 0) {
    prevBtn.addEventListener("click", () => {
      current = (current - 1 + cards.length) % cards.length;
      updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
      current = (current + 1) % cards.length;
      updateCarousel();
    });

    updateCarousel();
  }
});

function copyToClipboard() {
  const text = document.getElementById("orderText").innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("Copied to clipboard!");
  }).catch(err => {
    alert("Failed to copy text: " + err);
  });
}

  

 

