"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	typography: {
		fontFamily: "Vazir, sans-serif",
		body1: {
			lineHeight: 1.8,
		},
		body2: {
			lineHeight: 1.8,
		},
		h1: {
			fontFamily: "VazirBold, sans-serif",
			fontSize: "2.5rem",
			fontWeight: "600",
		},
		h2: {
			fontFamily: "VazirBold, sans-serif",
			fontSize: "2rem",
			fontWeight: "600",
		},
		h3: {
			fontFamily: "VazirBold, sans-serif",
			fontSize: "1.75rem",
			fontWeight: "600",
		},
		h4: {
			fontFamily: "VazirBold, sans-serif",
			fontSize: "1.5rem",
			fontWeight: "600",
		},
		h5: {
			fontFamily: "VazirBold, sans-serif",
			fontSize: "1.25rem",
			fontWeight: "600",
		},
		h6: {
			fontFamily: "VazirBold, sans-serif",
			fontSize: "1rem",
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
