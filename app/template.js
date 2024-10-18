'use client';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { usePathname } from 'next/navigation';
import FrontFooter from '@/components/layouts/footer/FrontFooter';
import SiteHeader from '@/components/layouts/header/SiteHeader';
import Loading from '@/components/modules/common/Loading';
import { useMediaQuery } from '@mui/system';
import { setViewPort } from '@/redux/features/publicSlice';

export default function RootTemplate({ children }) {
    const [isHome, setIsHome] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const pathname = usePathname();
    const dispatch = useDispatch();

    const isDesktop = useMediaQuery('(min-width:992px)');
    const isTablet = useMediaQuery('(min-width:768px) and (max-width:991px)');
    const isMobile = useMediaQuery('(max-width:480px)');

    useEffect(() => {
        setIsLoading(true);
        if (isDesktop) {
            dispatch(setViewPort({ viewPort: 'desktop' }));
            setIsLoading(false);
        } else if (isTablet) {
            dispatch(setViewPort({ viewPort: 'tablet' }));
            setIsLoading(false);
        } else if (isMobile) {
            dispatch(setViewPort({ viewPort: 'mobile' }));
            setIsLoading(false);
        }
    }, [isDesktop, isTablet, isMobile, dispatch]);

    useEffect(() => {
        setIsLoading(true);
        if (pathname === '/') {
            setIsHome(true);
            setIsLoading(false);
        } else {
            setIsHome(false);
            setIsLoading(false);
        }
    }, [pathname]);

    if (isLoading) {
        return <Loading isLoading={true} />;
    }

    return (
        <div className="main">
            <SiteHeader isHome={isHome} />
            {children}
            <FrontFooter />
        </div>
    );
}
