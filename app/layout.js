import "../styles/globals.css";
import "../styles/fonts.css";
import "../styles/dark.css";
import "../styles/rtl.css";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

export default function RootLayout({ children }) {
	return (
		<html>
			<body>
				<AppRouterCacheProvider>
					<ThemeProvider theme={theme}>{children}</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
