15. Добавление tRPC во фронтенд

cd webapp && pnpm i @trpc/client @trpc/react-query @tanstack/react-query — установить tRPC и его зависимости для клиента

"@tanstack/react-query": "^4.32.6",

Настроить монорепу с помощью pnpm
-- Файл pnpm-workspace.yaml - создаем рабочие пространства
-- package.json в корень проекта монорепы
-- зависмость во фронтовский package.json -> "@medgid/backend": "workspace:\*",
-- вызов pnpm i для установки зависимостей
-- настройка lib/trpc.tsx на фронте
-- webapp/src/App.tsx
-- cors for backend and @types/cors for DevDepends dor backend
-- add cors to express use
