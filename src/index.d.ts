export type PrettierConfig = import('prettier').Options & {
  overrides?: any[];
};

export type Options = {
  astro?: boolean;
  svelte?: boolean;
  tailwindcss?: boolean;
};

export function createConfig(options?: Options): PrettierConfig;
