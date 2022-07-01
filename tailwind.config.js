/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{ts, tsx}"],
	theme: {
		extend: {}
	},
	plugins: [
		/**
		 * '@tailwindcss/forms' is the forms plugin that provides a minimal styling
		 * for forms. If you don't like it or have own styling for forms,
		 * comment the line below to disable '@tailwindcss/forms'.
		 */
		require("@tailwindcss/forms")
	]
};
