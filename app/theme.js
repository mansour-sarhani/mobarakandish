"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	typography: {
		fontFamily: "var(--font-vazir), sans-serif",
		body1: {
			lineHeight: 1.8,
		},
		body2: {
			lineHeight: 1.8,
		},
		h1: {
			fontFamily: "var(--font-vazir-bold), sans-serif",
			fontSize: "2.5rem",
			fontWeight: "600",
		},
		h2: {
			fontFamily: "var(--font-vazir-bold), sans-serif",
			fontSize: "2rem",
			fontWeight: "600",
		},
		h3: {
			fontFamily: "var(--font-vazir-bold), sans-serif",
			fontSize: "1.75rem",
			fontWeight: "600",
		},
		h4: {
			fontFamily: "var(--font-vazir-bold), sans-serif",
			fontSize: "1.5rem",
			fontWeight: "600",
		},
		h5: {
			fontFamily: "var(--font-vazir-bold), sans-serif",
			fontSize: "1.25rem",
			fontWeight: "600",
		},
		h6: {
			fontFamily: "var(--font-vazir-bold), sans-serif",
			fontSize: "1.1rem",
			fontWeight: "600",
		},
	},
	palette: {
		primary: {
			main: "#00a594",
		},
		secondary: {
			main: "#ff6f00",
		},
	},
});

export default theme;
