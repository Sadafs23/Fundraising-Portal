document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:5000/data")
    .then(res => res.json())
    .then(data => {
      const name = localStorage.getItem("internName") || data.name;
      const goalAmount = localStorage.getItem("goalAmount") || 0;

      document.getElementById("internName").textContent = name;
      document.getElementById("referralCode").textContent = data.referralCode;
      document.getElementById("totalRaised").textContent = data.amountRaised;
      document.getElementById("goalAmount").textContent = goalAmount;

      let reward = "No reward";
      const amount = parseInt(goalAmount);
      if (amount >= 10000) reward = "T-shirt + Goodies Bag";
      else if (amount >= 5000) reward = "Goodies Bag";
      else if (amount >= 2000) reward = "Shoutout on social media";
      else if (amount >= 1000) reward = "E-certificate";

      document.getElementById("rewardText").textContent = reward;
    });
});
