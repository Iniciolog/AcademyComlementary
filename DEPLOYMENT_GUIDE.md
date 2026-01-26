# Настройка развертывания на GitHub Pages с доменом wikimedic.org

## Выполненные шаги ✅

### 1. Конфигурация Vite
- Обновлен `vite.config.ts` для использования переменной окружения `GITHUB_PAGES`
- При развертывании на GitHub Pages базовый путь будет `/` вместо `/AcademyComlementary/`

### 2. GitHub Actions Workflow
- Создан файл `.github/workflows/deploy.yml`
- Автоматический build и deploy при push в main branch
- Использует GitHub Pages deployment API

### 3. Привязка домена
- Создан файл `public/CNAME` с содержимым `wikimedic.org`
- Создан файл `public/.nojekyll` для корректной обработки статических файлов

## Что нужно сделать в GitHub

### Шаг 1: Включить GitHub Pages
1. Перейти на https://github.com/Iniciolog/AcademyComlementary
2. Settings → Pages
3. **Build and deployment → Source**: выбрать `Deploy from a branch`
4. **Branch**: выбрать `gh-pages` и `/root` directory
   - После первого успешного deployment автоматически создастся ветка gh-pages

### Шаг 2: Настроить пользовательский домен
1. Settings → Pages
2. **Custom domain**: введите `wikimedic.org`
3. GitHub создаст коммит с файлом CNAME

### Шаг 3: Настроить DNS записи (для хостера домена wikimedic.org)
Добавьте следующие DNS A записи:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Или добавьте CNAME запись (если хостер позволяет):
```
CNAME wikimedic.org -> Iniciolog.github.io
```

Или используйте Alias запись (для корневого домена):
```
ALIAS @ -> Iniciolog.github.io
```

### Шаг 4: Проверить SSL сертификат
1. Settings → Pages
2. Включить **Enforce HTTPS** после того, как DNS будет настроен

## Как работает развертывание

1. **Push в main** → GitHub Actions запускается
2. **Build** → npm run build (создается dist/public)
3. **Upload** → Артефакт загружается в GitHub Pages
4. **Deploy** → Файлы публикуются на gh-pages ветке
5. **CNAME** → Автоматически маршрутизирует трафик на wikimedic.org

## Проверка статуса

- Перейти на Actions вкладку репозитория для проверки статуса deployment
- Изначально может занять 5-10 минут для первого deployment

## Замечания

- Приложение использует Express сервер, но GitHub Pages поддерживает только статические сайты
- Если нужны API endpoints, используйте альтернативные решения (GitHub Pages только для фронтенда)
- CNAME файл будет скопирован в dist/public при каждом build
