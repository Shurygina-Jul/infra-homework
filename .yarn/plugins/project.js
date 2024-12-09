module.exports = {
  name: "plugin-project",
  factory: (require) => {
    const { Command } = require("clipanion");
    const fs = require("node:fs/promises");
    const path = require("node:path");

    class ProjectCommand extends Command {
      static paths = [["project"]];

      async execute() {
        // Читаем содержимое package.json
        const packagePath = path.join(process.cwd(), "package.json");
        const packageJson = JSON.parse(await fs.readFile(packagePath, "utf-8"));

        // Собираем информацию о проекте
        const projectInfo = {
          name: packageJson.name || "No data",
          version: packageJson.version || "No data",
          description: packageJson.description || "No data",
          dependencies: Object.entries(packageJson.dependencies || {}).map(
            ([dep, version]) => `${dep}: ${version}`
          ),
        };

        // Выводим результат
        this.context.stdout.write(JSON.stringify(projectInfo, null, 2));
      }
    }

    return {
      commands: [ProjectCommand],
    };
  },
};
