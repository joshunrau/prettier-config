// @ts-check

/** @typedef {import('./index.d.ts').PrettierConfig} PrettierConfig */
/** @typedef {import('./index.d.ts').Options} Options */

/**
 * Create a prettier config using the provided options
 * @param {Options} [options]
 * @returns {PrettierConfig}
 */
export function createConfig(options) {
  /** @type {PrettierConfig} */
  const config = {
    overrides: [],
    plugins: [],
    printWidth: 120,
    singleQuote: true,
    trailingComma: 'none'
  };
  if (options?.astro) {
    config.plugins?.push('prettier-plugin-astro');
    config.overrides?.push({
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    });
  }
  if (options?.tailwindcss) {
    config.plugins?.push('prettier-plugin-tailwindcss');
  }
  return config;
}

export default createConfig();
