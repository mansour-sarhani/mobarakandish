import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import Logo from '@/components/modules/common/Logo';
import DarkAndLightBtn from '@/components/modules/common/DarkAndLightBtn';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function MobileHeader({ currentUrl }) {
    const [state, setState] = useState({
        left: false,
    });

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
        <AppBar className="mobile-appbar" id="mobile_header">
            <Container>
                <Toolbar className="mobile-toolbar">
                    <Logo width="207" height="55" />

                    <div className="web-header-btns">
                        <DarkAndLightBtn />

                        <div className="header-btn">
                            <IconButton
                                size="small"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={toggleDrawer('left', true)}
                            >
                                <MenuIcon />
                            </IconButton>
                        </div>
                    </div>
                </Toolbar>

                <SwipeableDrawer
                    anchor={'left'}
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                    onOpen={toggleDrawer('left', true)}
                >
                    <div className="mobile-drawer-content">
                        <nav
                            aria-label="Mobile Menu"
                            className="mobile-menu-nav"
                        >
                            <ul className="menu-list">
                                <li className="menu-item">
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
                                        currentUrl === '/about-us'
                                            ? 'active-menu'
                                            : ''
                                    }`}
                                >
                                    <Link
                                        href={'/about-us'}
                                        className="menu-link"
                                    >
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
                                </li>
                            </ul>
                        </nav>

                        <div className="mobile-drawer-contact">
                            <Button
                                variant={'outlined'}
                                color="primary"
                                endIcon={<LocalPhoneIcon />}
                            >
                                <a href="tel:00982166436841">66436841 – 021</a>
                            </Button>
                        </div>
                    </div>
                </SwipeableDrawer>
            </Container>
        </AppBar>
    );
}

export default MobileHeader;
