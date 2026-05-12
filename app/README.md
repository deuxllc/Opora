# Опора — Психологическая помощь в Кемерово

Одностраничный лендинг психологического центра «Опора».

## Стек

- React 19 + TypeScript + Vite
- Tailwind CSS
- Three.js (WebGL-фон на Hero)
- GSAP + ScrollTrigger (анимации)
- Lenis (плавный скролл)

## Как развернуть на GitHub Pages

### 1. Создайте репозиторий на GitHub

1. Зайдите на [github.com](https://github.com) и создайте новый репозиторий
2. Назовите его, например, `opora-site`
3. Сделайте его **Public** (публичным)
4. Не добавляйте README, .gitignore и license — они уже есть в проекте

### 2. Загрузите файлы

```bash
# Установите git (если ещё не установлен)
# Затем выполните:

git init
git add .
git commit -m "Initial commit"

# Замените YOUR_USERNAME на ваш ник на GitHub
# Замените opora-site на название репозитория
git remote add origin https://github.com/YOUR_USERNAME/opora-site.git
git branch -M main
git push -u origin main
```

### 3. Включите GitHub Pages

1. На странице репозитория перейдите в **Settings** → **Pages**
2. В разделе **Source** выберите **GitHub Actions**
3. Готово! Сайт автоматически соберётся и задеплоится

4. Через 1–2 минуты сайт будет доступен по адресу:
   ```
   https://YOUR_USERNAME.github.io/opora-site/
   ```
   (ссылка появится в разделе Settings → Pages)

### 4. Обновление сайта

После каждого `git push` в ветку `main` сайт автоматически пересоберётся и обновится.

## Структура проекта

```
├── .github/workflows/deploy.yml   # Автодеплой на GitHub Pages
├── public/
│   └── assets/                    # Иллюстрации
├── src/
│   ├── components/                # Все компоненты секций
│   ├── App.tsx                    # Корневой компонент
│   ├── main.tsx                   # Точка входа
│   └── index.css                  # Глобальные стили
├── index.html                     # HTML-шаблон
├── vite.config.ts                 # Конфиг Vite
├── tailwind.config.js             # Конфиг Tailwind
└── package.json                   # Зависимости
```

## Локальный запуск

```bash
npm install
npm run dev
```

Сайт откроется по адресу `http://localhost:3000`
