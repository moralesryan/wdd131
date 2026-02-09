let reviewCounter = Number(localStorage.getItem("reviewCount")) || 0;
reviewCounter++;
localStorage.setItem("reviewCounter", reviewCounter);

document.querySelector("#review-counter").textContent = localStorage.getItem("reviewCounter");