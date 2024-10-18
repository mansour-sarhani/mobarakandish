import { createSlice } from '@reduxjs/toolkit';

export const publicSlice = createSlice({
    name: 'public',
    initialState: {
        theme: 'light',
        lang: 'fa',
        viewPort: 'desktop',
        currentUrl: '',
    },
    reducers: {
        toggleTheme: (state, action) => {
            const theme = action.payload.theme;
            state.theme = theme;
            localStorage.setItem('theme', theme);
        },
        toggleLanguage: (state, action) => {
            const lang = action.payload.lang;
            state.lang = lang;
            localStorage.setItem('lang', lang);
        },
        setCurrentUrl: (state, action) => {
            const url = action.payload.url;
            state.currentUrl = url;
        },
        setViewPort: (state, action) => {
            const viewPort = action.payload.viewPort;
            state.viewPort = viewPort;
        },
    },
});

export const { toggleTheme, toggleLanguage, setCurrentUrl, setViewPort } =
    publicSlice.actions;

export default publicSlice.reducer;
