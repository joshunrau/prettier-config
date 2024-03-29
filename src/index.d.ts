export type PrettierConfig = import('prettier').Options & {
  overrides?: any[];
};

export type Options = {
  astro?: boolean;
};

export function createConfig(options?: Options): PrettierConfig;
