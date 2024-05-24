import { createSlice } from "@reduxjs/toolkit";

export const publicSlice = createSlice({
	name: "public",
	initialState: {
		theme: "light",
	},
	reducers: {
		toggleTheme: (state) => {
			state.theme = state.theme === "light" ? "dark" : "light";
		},
	},
});

export const { toggleTheme } = publicSlice.actions;

export default publicSlice.reducer;
