// lira-core.js

const LIRA_TOKEN = "2517"; // можно заменить на системный ввод

let currentToken = "";

function verifyToken(input) {
  if (input === LIRA_TOKEN) {
    currentToken = input;
    logToConsole("Токен принят. Добро пожаловать, пользователь.");
    enableLiraUI();
    return true;
  } else {
    logToConsole("Неверный токен. Попробуйте снова.");
    return false;
  }
}

function logToConsole(message) {
  const logArea = document.getElementById("lira-log");
  if (logArea) {
    logArea.value += ${new Date().toLocaleTimeString()} — ${message}\n;
    logArea.scrollTop = logArea.scrollHeight;
  } else {
    console.log("LIRA LOG:", message);
  }
}

function enableLiraUI() {
  const hiddenArea = document.querySelectorAll(".lira-locked");
  hiddenArea.forEach(el => el.classList.remove("lira-locked"));
}

function createFile(filename, extension, content) {
  if (!currentToken) {
    logToConsole("Нет доступа: Токен не введён.");
    return;
  }

  const fullName = ${filename}.${extension};
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fullName;
  link.click();

  logToConsole(Файл "${fullName}" создан и готов к сохранению.);
}
