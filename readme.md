# [@weiland](https://github.com/weiland)'s prettier config

Prettier config for my projects.


## Install the npm package

```bash
# using npm:
npm add --save-dev @weiland/prettier-config

# using pnpm:
pnpm add --save-dev @weiland/prettier-config

# using yarn:
npm add --dev @weiland/prettier-config

# using bun:
bun add --dev @weiland/prettier-config
```


## Add `prettier` key to the `package.json`

```json
{
  "prettier": "@weiland/prettier-config"
}
```

or

## Create a `prettier.config.mjs`

file with following contents:

```js
import weilandPrettierConfig from '@weiland/prettier-config'

/**
 * @type {import('prettier').Config}
 */
const config = {
  ...weilandPrettierConfig,
  semi: false,
};

export default config;
```

Also make sure to have installed `prettier` in your project or on your machine.
