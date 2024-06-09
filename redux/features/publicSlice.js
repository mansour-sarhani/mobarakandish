import { createSlice } from "@reduxjs/toolkit";

export const publicSlice = createSlice({
	name: "public",
	initialState: {
		theme: "light",
		lang: "fa",
	},
	reducers: {
		toggleTheme: (state, data) => {
			const theme = data.payload.theme;
			state.theme = theme;
			localStorage.setItem("theme", theme);
		},
		toggleLanguage: (state, data) => {
			const lang = data.payload.lang;
			state.lang = lang;
			localStorage.setItem("lang", lang);
		},
	},
});

export const { toggleTheme, toggleLanguage } = publicSlice.actions;

export default publicSlice.reducer;
