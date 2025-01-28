document.getElementById("spinButton").addEventListener("click", function () {
  const name = document.getElementById("nameInput").value.trim();

  if (name === "") {
    alert("Please enter your name to play.");
    return;
  }

  const rewards = [
    { amount: 160, emoji: "💸" },
    { amount: 180, emoji: "🎉" },
    { amount: 200, emoji: "🌟" },
    { amount: 250, emoji: "🏆" },
  ];

  const randomReward = rewards[Math.floor(Math.random() * rewards.length)];

  const resultMessage = `${name}, you have won £${randomReward.amount} ${randomReward.emoji}! Enjoy your photography session! 📸`;

  document.getElementById("result").textContent = resultMessage;
});

// Trigger the Play button with the Enter key
document
  .getElementById("nameInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      document.getElementById("spinButton").click();
    }
  });

