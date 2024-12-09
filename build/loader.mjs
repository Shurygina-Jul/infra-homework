import yaml from "yaml";
import path from "node:path";
import fs from "node:fs/promises";

// Function to load YAML
export async function loadYAML(modulePath) {
  console.log("loadYAML");
  const currentModulePath = new URL(import.meta.url).pathname;
  const currentModuleDir = path.dirname(currentModulePath);
  const filePath = path.resolve(path.join(currentModuleDir, modulePath));
  console.log("filePath", filePath);

  try {
    const fileContent = await fs.readFile(filePath, "utf8");
    return yaml.parse(fileContent);
  } catch (error) {
    console.error(`Error loading YAML file: ${filePath}`, error);
    throw error;
  }
}

export function createLoader() {
  return {
    get: async (specifier, resolveContext) => {
      const url = new URL(specifier, resolveContext.parentURL);
      if (url.pathname.endsWith(".yml") || url.pathname.endsWith(".yaml")) {
        try {
          const yamlData = await loadYAML(url.pathname.slice(1));
          return {
            format: "module",
            module: {
              default: yamlData,
            },
          };
        } catch (error) {
          console.error(`Error loading module: ${specifier}`, error);
          throw error;
        }
      }
      return null;
    },
  };
}

// Register loader
const loader = createLoader();
if (typeof globalThis.__MODULE_LOADERS__ !== "undefined") {
  globalThis.__MODULE_LOADERS__.push(loader);
} else {
  globalThis.__MODULE_LOADERS__ = [loader];
}
