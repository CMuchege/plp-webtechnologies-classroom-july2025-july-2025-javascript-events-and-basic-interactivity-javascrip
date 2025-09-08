const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

let count = 0;
const countBtn = document.getElementById("countBtn");
const countDisplay = document.getElementById("countDisplay");
countBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});

const signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let valid = true;

  if (name === "") {
    document.getElementById("nameError").textContent = "i honestly need your name.";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  if (email === "" || !email.includes("@")) {
    document.getElementById("emailError").textContent = "Bro you're trippin!.";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  const formMessage = document.getElementById("formMessage");
  if (valid) {
    formMessage.textContent = "THERE YOU GO!!";
    formMessage.style.color = "green";
    signupForm.reset();
  } else {
    formMessage.textContent = "HA!! YOU CAN DO BETTER.";
    formMessage.style.color = "red";
  }
});
