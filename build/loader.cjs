const yaml = require("yaml");
const fs = require("node:fs");

// Добавляем обработчик для расширения .yml
require.extensions[".yml"] = function (module, filename) {
  // Читаем содержимое YAML-файла
  const content = fs.readFileSync(filename, "utf8");
  // Парсим YAML и экспортируем как JSON
  module.exports = yaml.parse(content);
};
