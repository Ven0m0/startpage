export default [
	{
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: {
				window: "readonly",
				document: "readonly",
				localStorage: "readonly",
				console: "readonly",
			},
		},
		rules: {
			indent: ["error", 2],
			"linebreak-style": ["error", "unix"],
			quotes: ["error", "double"],
			semi: ["error", "always"],
		},
	},
];
