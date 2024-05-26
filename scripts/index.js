document.addEventListener("DOMContentLoaded", () => {
  const quizzLink = document.getElementById("quizz");
  quizzLink.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "pages/cuestionario.html";
  });
});
