# Перевірка діаграми flow.mmd

Запит до Codex: для кожної стрілки з flow.mmd вказати код у src/forecast.js або src/format.js (файл і рядок), або написати "no code found".

Прогноз: у getForecast немає перевірки вхідних даних і гілки помилки.

Результат за стрілками:

- input --> validate: код не знайдено
- validate -->|ok| process: код не знайдено
- validate -->|bad| error: src/format.js, рядок 3, throw new Error("Forecast date must be YYYY-MM-DD");
- process --> output: src/forecast.js, рядок 14, return sampleForecast.forecast.filter(...)

Висновок: перевірка дати є у format.js, але getForecast її не викликає. Діаграма показує потік, якого в коді немає. Прогноз підтвердився.
