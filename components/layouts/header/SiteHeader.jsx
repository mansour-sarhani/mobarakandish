import { useEffect, useState } from 'react';
import MobileHeader from '@/components/layouts/header/_mobileHeader';
import WebHeader from '@/components/layouts/header/_webHeader';
import { useSelector } from 'react-redux';

export default function SiteHeader({ isHome }) {
    const [isSticky, setSticky] = useState(false);

    const viewPort = useSelector((state) => state.public.viewPort);

    useEffect(() => {
        const checkScroll = () => {
            setSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', checkScroll);

        return () => {
            window.removeEventListener('scroll', checkScroll);
        };
    }, []);

    const headerClasses = `site-header ${
        isHome ? 'home-header' : 'front-header'
    } ${isSticky ? 'sticky-header' : ''} ${
        viewPort === 'desktop' ? 'web-header' : 'mobile-header'
    }`;

    return (
        <div className={headerClasses}>
            {viewPort === 'desktop' ? (
                <WebHeader isSticky={isSticky} />
            ) : (
                <MobileHeader />
            )}
        </div>
    );
}
