// Random Quote Generator JS
const quotes = [
  "The best way to get started is to quit talking and begin doing.",
        "You're not behind. You're just loading.",
        "Don't shrink yourself. Zoom in instead.",
        "Take the risk. Worst case? You become a storytime.",
        "Great things never come from comfort zones.",
        "The harder you work for something, the greater you'll feel when you achieve it.",
        "Do it scared, do it clueless, Just do it.",
        "If you dont ask, the answer is already no. So ask, Loudly.",
        "Confidence is just being too tired to care what people think.",
        "If you're going to be the problem, at least be the main one.",
        "Trust the process. Even if the process is chaos and stack overflow.",
        "Coding is 10% writing and 90% googling.",
        "If at first you dont succeed, blame javascript."    
];

const generateQuoteBtn = document.getElementById('generateQuoteBtn');
const quoteDisplay = document.getElementById('quoteDisplay');

generateQuoteBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDisplay.textContent = quotes[randomIndex];
});

  function changeColor() {
    const card = document.getElementById("color-picker-card");
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    card.style.backgroundColor = randomColor;
  }