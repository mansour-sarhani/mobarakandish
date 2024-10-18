import { useState } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuFieldItems from '@/components/layouts/header/_menuFieldItems';

export default function FrontMenu() {
    const [state, setState] = useState({
        top: false,
    });

    const currentUrl = useSelector((state) => state.public.currentUrl);

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const fieldsPaths = [
        '/beef-cow',
        '/beef-cow/sperms-list',
        '/milk-cow',
        '/milk-cow/sperms-list',
        '/sheep-goat',
        '/fish',
        '/chicken',
        '/bee',
    ];

    return (
        <div className="header-menu inner-pages-menu">
            <nav aria-label="Inner Pages Menu" className="menu-nav">
                <ul className="menu-list">
                    <li
                        className={`menu-item ${
                            currentUrl === '/' ? 'active-menu' : ''
                        }`}
                    >
                        <Link
                            href={'/'}
                            className="menu-link"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px',
                            }}
                        >
                            <HomeIcon />
                            خانه
                        </Link>
                    </li>
                    <li
                        className={`menu-item ${
                            currentUrl === '/about-us' ? 'active-menu' : ''
                        }`}
                    >
                        <Link href={'/about-us'} className="menu-link">
                            درباره ما
                        </Link>
                    </li>
                    <li
                        className={`menu-item ${
                            fieldsPaths.includes(currentUrl)
                                ? 'active-menu'
                                : ''
                        }`}
                    >
                        <Link
                            href={'#'}
                            onClick={toggleDrawer('top', true)}
                            className="menu-link"
                        >
                            حوزه های فعالیت
                        </Link>
                        <SwipeableDrawer
                            anchor={'top'}
                            open={state['top']}
                            onClose={toggleDrawer('top', false)}
                            onOpen={toggleDrawer('top', true)}
                        >
                            <MenuFieldItems
                                toggleDrawer={toggleDrawer}
                                anchor={'top'}
                            />
                        </SwipeableDrawer>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
