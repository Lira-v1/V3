function handleToken() {
  const input = document.getElementById("tokenInput");
  const token = input.value.trim();
  const log = document.getElementById("log");
  const hiddenBlock = document.querySelector(".lira-locked");

  if (token === "2517") {
    // Сохраняем токен в памяти браузера (локально)
    localStorage.setItem("lira_token", token);
    
    // Показываем скрытый блок
    hiddenBlock.style.display = "block";
    log.textContent = "✅ Доступ разрешён. Добро пожаловать!";
    log.style.color = "green";
  } else {
    log.textContent = "❌ Неверный токен. Повторите ввод.";
    log.style.color = "red";
  }
}
