/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ["futura-pt", "sans-serif", "ui-sans-serif", "system-ui"]
		},
		extend: {
			colors: {
				blue: "#0000ff",
				neutral: "#eee"
			},
			gridTemplateRows: {
				// Simple 21 row grid
				19: "repeat(19, minmax(25px, 1fr))"
			}
		}
	},
	plugins: []
};
