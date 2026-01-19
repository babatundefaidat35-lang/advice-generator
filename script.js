const diceButton = document.getElementById("dice-button");
const adviceIdElement = document.getElementById("advice-id");
const adviceTextElement = document.getElementById("advice-text");
const container = document.querySelector(".container");

async function fetchAdvice() {
  try {
    container.classList.add("loading");
    const response = await fetch("https://api.adviceslip.com/advice");

    if (!response.ok) {
      throw new Error("Failed to fetch advice");
    }

    const data = await response.json();
    adviceIdElement.textContent = data.slip.slip_id;
    adviceTextElement.textContent = data.slip.advice;
  } catch (error) {
    adviceTextElement.textContent = "Failed to load advice. Please try again.";
    console.error("Error fetching advice:", error);
  } finally {
    container.classList.remove("loading");
  }
}

diceButton.addEventListener("click", fetchAdvice);

// Fetch initial advice on page load
fetchAdvice();