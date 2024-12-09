# Добавить команду yarn project 

Необходимо добавить для для yarn новую команду `project`. Команда должна выводить информацию о проекте (name, version, author, description, dependencies).

Для этого необходимо реализовать плагин в `.yarn/plugins/project.js`.

Информацию о проекте необходимо взять из yarn контекста.

Для проверки используйте скрипт `yarn test:yarn`.

## Подсказки

[Yarn plugin tutorial](https://yarnpkg.com/advanced/plugin-tutorial)

[Manifest](https://yarnpkg.com/api/yarnpkg-core/class/Manifest)

Для дебага yarn можно воспользоваться запуском через node

`node --inspect-wait .yarn/releases/yarn-4.5.3.cjs`
