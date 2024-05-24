import { configureStore } from "@reduxjs/toolkit";
import publicSlice from "./features/publicSlice";

export default configureStore({
	reducer: {
		public: publicSlice,
	},
});
