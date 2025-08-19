/**
 * Some of Prettier's defaults can be overridden by an EditorConfig file.
 * We define those here to ensure that doesn't happen.
 *
 * See: https://github.com/prettier/prettier/blob/main/docs/configuration.md#editorconfig
 */
const overridableDefaults = {
	endOfLine: 'lf',
	// tabWidth is neither set in .editorconfig nor here, so every developer
	// can set their own preference in their editor locally.
	// tabWidth: 4, // defaults to `2`
	// default is 80
	// same goes with `printWidth`. We inherit this value from the editorconfig's `max_line_length`.
	// printWidth: 120, // prettier recommends 80 (and reminds that this is not a hard-limit (like `max-len` in ESLint).
}

/**
 * @type {import('prettier').Config}
 * @see https://prettier.io/docs/options.html
 */
export const config = {
	...overridableDefaults,
	useTabs: true,
	singleQuote: true,
	semi: false,
	trailingComma: 'es5',
}

export default config
