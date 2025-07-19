const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", () => {
  const budget = Number(document.getElementById("monthlyBudget").value);
  const essentials = Array.from(document.querySelectorAll(".essential")).map(
    (input) => Number(input.value) || 0
  );

  const optionals = Array.from(document.querySelectorAll(".optional")).map(
    (input) => Number(input.value) || 0
  );

  const totalExpenses = [...essentials, ...optionals].reduce(
    (acc, val) => acc + val,
    0
  );

  const balance = budget - totalExpenses;

  const remainingBox = document.getElementById("remainingBalance");
  const messageBox = document.getElementById("messageBox");

  remainingBox.textContent = `🧮 Remaining: ₹${balance}`;

  if (balance > 2000) {
    remainingBox.style.color = "green";
    messageBox.innerHTML = `🚀 Superstar Saver! ₹${balance} left — Future millionaire in the making! 💼💰`;
  } else if (balance > 1000) {
    remainingBox.style.color = "seagreen";
    messageBox.innerHTML = `👏 Nice going! ₹${balance} saved — You’re managing things quite well! 📘👍`;
  } else if (balance >= 0) {
    remainingBox.style.color = "orange";
    messageBox.innerHTML = `🙂 Hmm... ₹${balance} left — Not bad, but a little more saving wouldn’t hurt 🐷📉`;
  } else {
    remainingBox.style.color = "red";
    messageBox.innerHTML = `😬 Uh-oh, overspent ₹${Math.abs(
      balance
    )}. Let’s cut back next month 🛑💸`;
  }
});
