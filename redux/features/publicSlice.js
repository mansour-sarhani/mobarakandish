import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import http from '@/functions/httpService';

const initialState = {
    data: {},
    theme: 'light',
    lang: 'fa',
    viewPort: 'desktop',
    currentUrl: '',
    status: 'idle',
    error: null,
};

export const GET_ALL_DAIRY_COW_SPERMS_LIST = createAsyncThunk(
    'admin/GET_ALL_DAIRY_COW_SPERMS_LIST',
    async (_, { rejectWithValue }) => {
        try {
            const response = await http.get('/Dairy/List');
            return response.data;
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            return rejectWithValue(err.response.data);
        }
    }
);

export const GET_ALL_BEEF_COW_SPERMS_LIST = createAsyncThunk(
    'admin/GET_ALL_BEEF_COW_SPERMS_LIST',
    async (_, { rejectWithValue }) => {
        try {
            const response = await http.get('/Beef/List');
            return response.data;
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            return rejectWithValue(err.response.data);
        }
    }
);

export const publicSlice = createSlice({
    name: 'public',
    initialState,
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
    extraReducers: (builder) => {
        //GET_ALL_DAIRY_COW_SPERMS_LIST
        builder
            .addCase(GET_ALL_DAIRY_COW_SPERMS_LIST.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(
                GET_ALL_DAIRY_COW_SPERMS_LIST.fulfilled,
                (state, action) => {
                    state.status = 'succeeded';
                    state.data = action.payload.data;
                }
            )
            .addCase(
                GET_ALL_DAIRY_COW_SPERMS_LIST.rejected,
                (state, action) => {
                    state.status = 'failed';
                    state.error = action.payload;
                }
            );

        //GET_ALL_BEEF_COW_SPERMS_LIST
        builder
            .addCase(GET_ALL_BEEF_COW_SPERMS_LIST.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(
                GET_ALL_BEEF_COW_SPERMS_LIST.fulfilled,
                (state, action) => {
                    state.status = 'succeeded';
                    state.data = action.payload.data;
                }
            )
            .addCase(GET_ALL_BEEF_COW_SPERMS_LIST.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const { toggleTheme, toggleLanguage, setCurrentUrl, setViewPort } =
    publicSlice.actions;

export default publicSlice.reducer;
