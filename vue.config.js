module.exports = {
	css: {
		loaderOptions: {
			scss: {
				// eslint-disable-next-line quotes
				// prependData: `@use "@/assets/scss/main.scss" as *;`,
				prependData: `@import "@/assets/scss/main.scss";`,
			},
		},
	},
	devServer: {
		overlay: {
			warnings: true,
			errors: true,
		},
	},
};
