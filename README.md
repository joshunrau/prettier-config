# Prettier Config

## Install

```shell
pnpm add -D @joshunrau/prettier-config prettier
```

## Usage

**prettier.config.js**

```javascript
import { createConfig } from '@joshunrau/prettier-config';

export default createConfig({
  astro: false // requires prettier-plugin-astro
});
```
