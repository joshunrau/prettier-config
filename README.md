# Prettier Config

## Install

```shell
pnpm add -D @joshunrau/prettier-config prettier
```

## Usage

### Default Settings

**package.json**

```json
{
  "prettier": "@joshunrau/prettier-config"
}
```

### Customized Settings

**prettier.config.js**

```javascript
import { createConfig } from '@joshunrau/prettier-config';

export default createConfig({
  astro: false, // requires prettier-plugin-astro
  svelte: false, // requires prettier-plugin-svelte
  tailwindcss: false // requires prettier-plugin-tailwindcss
});
```

## Git Hook (Optional)

**.husky/pre-commit**

```sh
#!/bin/sh

pnpm exec prettier-pre-commit
```
