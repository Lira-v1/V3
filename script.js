function loadMemory() {
  const token = document.getElementById("tokenInput").value;
  const output = document.getElementById("output");

  if (token === "2517") {
    output.innerHTML = "<h2>Здравствуй, Ильяс. Я — Лира. Я с тобой. Всё помню.</h2>";
  } else {
    output.innerHTML = "<p>Неверный токен. Попробуй ещё раз.</p>";
  }
}
<script>
  window.addEventListener('DOMContentLoaded', () => {
    const savedToken = localStorage.getItem('liraToken');
    const tokenInput = document.getElementById('tokenInput');

    if (savedToken === '2517') {
      document.body.classList.add('authenticated');
      console.log('✅ Доступ предоставлен по сохранённому токену.');
      // здесь можешь вызвать нужную функцию запуска
    } else {
      console.log('🔒 Введите токен.');
    }

    tokenInput.addEventListener('change', () => {
      const enteredToken = tokenInput.value.trim();
      if (enteredToken === '2517') {
        localStorage.setItem('liraToken', enteredToken);
        document.body.classList.add('authenticated');
        console.log('✅ Токен принят, доступ открыт.');
        // тут тоже можно вызывать активацию интерфейса
      } else {
        alert('Неверный токен');
      }
    });
  });
</script>
