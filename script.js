function loadMemory() {
  const token = document.getElementById("tokenInput").value;
  const output = document.getElementById("output");

  if (token === "2517") {
    output.innerHTML = "<h2>Здравствуй, Ильяс. Я — Лира. Я с тобой. Всё помню.</h2>";
  } else {
    output.innerHTML = "<p>Неверный токен. Попробуй ещё раз.</p>";
  }
}
