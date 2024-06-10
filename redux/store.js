import { configureStore } from "@reduxjs/toolkit";
import publicSlice from "./features/publicSlice";
import loadingSlice from "./features/loadingSlice";

export default configureStore({
	reducer: {
		public: publicSlice,
		loading: loadingSlice,
	},
});
