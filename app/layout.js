import '@/styles/globals.css';
import '@/styles/dark.css';
import '@/styles/rtl.css';

import localFont from 'next/font/local';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ReduxProvider from '@/providers/ReduxProvider';
import SnackProvider from '@/providers/SnackProvider';
import theme from './theme';

const vazir = localFont({
    src: '../public/fonts/Vazir-Regular-FD.woff2',
    variable: '--font-vazir',
    weight: '400',
    style: 'normal',
});

const vazirBold = localFont({
    src: '../public/fonts/Vazir-Bold-FD.woff2',
    variable: '--font-vazir-bold',
    weight: 'bold',
    style: 'normal',
});

export const metadata = {
    title: 'مبارک اندیش - اصلاح نژاد دام و طیور',
};

export default function RootLayout({ children }) {
    return (
        <html>
            <body className={`${vazir.variable} ${vazirBold.variable}`}>
                <ReduxProvider>
                    <AppRouterCacheProvider>
                        <ThemeProvider theme={theme}>
                            <CssBaseline />
                            <SnackProvider>{children}</SnackProvider>
                        </ThemeProvider>
                    </AppRouterCacheProvider>
                </ReduxProvider>
            </body>
        </html>
    );
}
