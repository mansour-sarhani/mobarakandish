import "./globals.css";
import "./fonts.css";
import "../styles/SliderStyles.css";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import Header from "@/components/layouts/front/Header";

export const metadata = {
	title: "مبارک اندیش",
	description: "اصلاح نژاد دام و طیور",
};

export default function RootLayout({ children }) {
	return (
		<html lang="fa">
			<body>
				<AppRouterCacheProvider>
					<ThemeProvider theme={theme}>
						<Header />
						{children}
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
